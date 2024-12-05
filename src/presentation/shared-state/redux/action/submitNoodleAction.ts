import { createAsyncThunk } from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
interface SubmitNoodlePayload {
    selectedIconIds: number[];
    userInfo: {
      userId: string;
      name: string;
    };
  }

export const submitNoodleAction = createAsyncThunk(
  'noodles/submit',
  async ({ selectedIconIds, userInfo }: SubmitNoodlePayload, { rejectWithValue }) => {
    if (selectedIconIds.length === 0) {
      return rejectWithValue('No icon selected');
    }

    const maxSelectedId = Math.max(...selectedIconIds);
    try {
      const userDoc = await firestore().collection('users').doc(userInfo.userId).get();
      const userData = userDoc.data();

      if (!userData) {
        throw new Error('User data not found');
      }

      const remainingNoodles = userData.numberCupOfNoodles || 0;
      const newRemainingNoodles = remainingNoodles - maxSelectedId;

      if (newRemainingNoodles < 0) {
        throw new Error("Not enough noodles");
      }

      await firestore().collection('users').doc(userInfo.userId).update({
        numberCupOfNoodles: newRemainingNoodles
      });

      const noodleMachineDoc = await firestore().collection('noodleMachine').doc('numberCup').get();
      const noodleMachineData = noodleMachineDoc.data();
      const machineNoodles = noodleMachineData?.numberCupOfNoodles || 0;
      const newMachineNoodles = machineNoodles - maxSelectedId;

      if (newMachineNoodles < 0) {
        throw new Error("Not enough noodles in the machine");
      }

      await firestore().collection('noodleMachine').doc('numberCup').update({
        numberCupOfNoodles: newMachineNoodles
      });

      const actionName = new Date().toLocaleDateString('en-GB').replace(/\//g, '_'); 
      await firestore()
        .collection('noodleMachine')
        .doc('history')
        .collection(actionName)
        .add({
          userId: userInfo.userId,
          name: userInfo.name,
          noodlesTaken: maxSelectedId,
          timestamp: new Date().toISOString(),
        });

      return { success: true };
    } catch (error) {
      return rejectWithValue(error.message || 'Error while submitting');
    }
  }
);
