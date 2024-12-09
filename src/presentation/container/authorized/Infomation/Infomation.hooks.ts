import { useEffect, useState } from 'react';
import { Alert, BackHandler } from 'react-native';
import { useDispatch } from 'react-redux';
import { resetMachine, resetScan, logOut } from '../../../shared-state';

export const useInfomationHook = (userInfo: any, numberCupOfNoodles: number) => {
    const dispatch = useDispatch();
    const [selectedIconIds, setSelectedIconIds] = useState<number[]>([]);
    const [A, setA] = useState(3);

    useEffect(() => {
        const calculatedA = Math.min(userInfo?.remainingNoodles, numberCupOfNoodles);
        setA(calculatedA);
    }, [userInfo.remainingNoodles, numberCupOfNoodles]);

    useEffect(() => {
        const handleBackPress = () => {
            Alert.alert(
                'Xác nhận',
                'Bạn có chắc chắn muốn thoát không?',
                [
                    { text: 'Không', style: 'cancel' },
                    {
                        text: 'Có',
                        onPress: () => {
                            dispatch(resetMachine());
                            dispatch(resetScan());
                            dispatch(logOut());
                        },
                    },
                ],
                { cancelable: true }
            );
            return true; 
        };

        BackHandler.addEventListener('hardwareBackPress', handleBackPress);

        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
        };
    }, [dispatch]);

    return { selectedIconIds, setSelectedIconIds, A };
};
