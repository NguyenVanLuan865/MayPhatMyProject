import { Dispatch } from 'redux';
import firestore from '@react-native-firebase/firestore';
import { startAuthentication, authenticationSuccess, authenticationFailure } from '../reducers/userSlice';
import { setRemainingNoodles, setMachineStatus } from '../reducers/noodleMachineSlice';
import { setScreen } from '../reducers/navigationSlice';
import { useSelector } from 'react-redux';

export const signIn = (userId: string) => async (dispatch: Dispatch) => {
    dispatch(startAuthentication());
    try {
        const userDoc = await firestore().collection('users').doc(userId).get();

        if (!userDoc.exists) {
            dispatch(authenticationFailure('User not found'));
            dispatch(setScreen('error'));
            return;
        }

        const userData = userDoc.data();

        if (userData) {
            dispatch(authenticationSuccess({
                userId: userId,
                name: userData.name,
                birthday: userData.birthday,
                gender: userData.gender,
                department: userData.department,
                remainingNoodles: userData.numberCupOfNoodles || 0,
                avatar: userData.avatar,
            }));

            const noodleMachineDoc = await firestore().collection('noodleMachine').doc('numberCup').get();
            const machineData = noodleMachineDoc.data();

            if (machineData) {
                const numberCupOfNoodles = machineData.numberCupOfNoodles;
                dispatch(setRemainingNoodles(numberCupOfNoodles));
                dispatch(setMachineStatus('idle'));
                dispatch(setScreen('authorized'));
            }
        }
    } catch (error) {
        console.error('Sign in error: ', error);
        dispatch(authenticationFailure('An error occurred during authentication.'));
        dispatch(setScreen('error'));
    }
};
