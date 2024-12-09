import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../shared-state';
import scanLogin from '../container/authentication/scanLogin';
import Error from '../container/authentication/Error';
import OutOfNoodle from '../container/authentication/OutOfNoodles';
import firestore from '@react-native-firebase/firestore';
import { 
    setRemainingNoodles, 
    setMachineStatus, 
    setScreen  
} from '../shared-state';
import { AuthenticationStoryboardParamList } from '../storyboards';

const AuthStack = createNativeStackNavigator<AuthenticationStoryboardParamList>();

const AuthenticationNavigation: React.FC = () => {
    const dispatch = useDispatch();
    const currentScreen = useSelector((state: RootState) => state.navigation.currentScreen);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        const unsubscribe = firestore()
            .collection('noodleMachine')
            .doc('numberCup')
            .onSnapshot((doc) => {
                const machineData = doc.data();

                if (machineData) {
                    const numberCupOfNoodles = machineData.numberCupOfNoodles;
                    dispatch(setRemainingNoodles(numberCupOfNoodles));
                    console.log(numberCupOfNoodles)
                    if (numberCupOfNoodles == 0) {
                        dispatch(setMachineStatus('empty'));
                        dispatch(setScreen('noodlesEmpty'));
                        console.log(currentScreen)
                    } else {
                        dispatch(setMachineStatus('idle'));
                        dispatch(setScreen('login'));
                    }
                }
                setIsLoading(false); 
            });

        return () => unsubscribe();
    }, [dispatch]);

    if (isLoading) {
        return null; 
    }

    return (
        <AuthStack.Navigator initialRouteName={currentScreen === 'noodlesEmpty' ? 'OutOfNoodle' : 'scanLogin'}>
            {currentScreen === 'error' ? (
                <AuthStack.Screen
                    name="Error"
                    component={Error}
                    options={{ headerShown: false }}
                />
            ) : currentScreen === 'noodlesEmpty' ? (
                <AuthStack.Screen
                    name="OutOfNoodle"
                    component={OutOfNoodle}
                    options={{ headerShown: false }}
                />
            ) : (
                <AuthStack.Screen
                    name="scanLogin"
                    component={scanLogin}
                    options={{ headerShown: false }}
                />
            )}
        </AuthStack.Navigator>
    );
};

export default AuthenticationNavigation;
