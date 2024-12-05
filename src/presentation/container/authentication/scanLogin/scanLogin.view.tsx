import React, { useState , useEffect} from 'react';
import { Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { PrimaryBackground } from '../../../component';
import { styles } from './scanLogin.style';
import { ICON_AREASCAN, ICON_ARROW_RIGHT, ICON_SCAN } from '../../../../../assets';
import QRCode from 'react-native-qrcode-svg';
import { signIn } from '../../../shared-state';
import { useDispatch } from 'react-redux';
import { store } from '../../../shared-state';
import firestore from '@react-native-firebase/firestore';
import { setRemainingNoodles } from '../../../shared-state/redux/reducers/noodleMachineSlice';
import { setScreen } from '../../../shared-state/redux/reducers/navigationSlice';
import { setMachineStatus } from '../../../shared-state/redux/reducers/noodleMachineSlice';
import { useNavigation } from '@react-navigation/native';

const scanLogin: React.FC = () => {

    const dispatch = useDispatch();
    const [userId, setUserId] = useState('');
    const id= 'iTZZJBOTEmdoBJoGMB47ZaRA2Op2';
    const navigation = useNavigation();

    const handleSignIn = async () => {
        try {
            await dispatch(signIn(id));
        } catch (error) {
        }
        const currentState = store.getState().navigation;
        console.log('Navigation State After SignIn:', currentState);

    };
    // useEffect(() => {
    //     const fetchMachineData = async () => {
    //       try {
    //         const noodleMachineDoc = await firestore()
    //           .collection('noodleMachine')
    //           .doc('numberCup')
    //           .get();
              
    //         const machineData = noodleMachineDoc.data();
            
    //         if (machineData) {
    //           const numberCupOfNoodles = machineData.numberCupOfNoodles;
    //           dispatch(setRemainingNoodles(numberCupOfNoodles));  
    
    //           if (numberCupOfNoodles === 0) {
    //             dispatch(setMachineStatus('empty')); 
    //             dispatch(setScreen('noodlesEmpty'));  
    //           } else {
    //             dispatch(setMachineStatus('idle'));  
    //             dispatch(setScreen('login')); 
    //             navigation.navigate('scanLogin');
    //           }
    //         }
    //       } catch (error) {
    //         console.error('Lỗi khi lấy dữ liệu máy mì: ', error);
    //       }
    //     };
    
    //     fetchMachineData();
    //   }, [dispatch, navigation]); 
    return (
        <PrimaryBackground headerText="welcom">
            <View>
                <View style={styles.container}>
                    <View style={styles.frame}>
                        <View style={styles.screenscan}>

                        </View>
                    </View>
                </View>
                <View style={styles.shadow}>

                </View>
            </View>
            <View style={styles.viewnote}>
                <Image style={styles.iconscan} source={ICON_SCAN} />
                <Text style={styles.tiltenote}>
                    Follow the arrow to scan card
                </Text>
            </View>
            <TouchableOpacity onPress={handleSignIn}>
                <Image style={styles.areascan} source={ICON_AREASCAN} />

            </TouchableOpacity>
            <Image style={styles.arrowright} source={ICON_ARROW_RIGHT} />
        </PrimaryBackground>
    );
};

export default React.memo(scanLogin);