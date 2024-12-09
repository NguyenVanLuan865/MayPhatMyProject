import React, { useEffect } from 'react';
import { Image, View, Text} from 'react-native';
import {PrimaryBackground } from '../../../component';
import { styles } from './Error.style';
import { ICON_AREASCAN, ICON_ARROW_RIGHT, ICON_ERROR, ICON_SCAN } from '../../../../../assets';
import { useDispatch } from 'react-redux';
import { setScreen, resetScan } from '../../../shared-state';
import { useNavigation } from '@react-navigation/native';


const Error: React.FC = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(setScreen('login'));
            dispatch(resetScan());
        }, 5000);

        return () => clearTimeout(timeout); 
    }, [dispatch, navigation]);


    return (
        <PrimaryBackground headerText="error">
            <Text style={styles.notification}>
                Can not recongnize your ID card.
            </Text>
            <View style={styles.again}>
                <Text style={styles.tilteagain}>
                    Please scan again.
                </Text>
            </View>
            <Image
                source={ICON_ERROR}
                style={styles.error}
            />
            <View style={styles.viewnote}>
                <Image style={styles.iconscan} source={ICON_SCAN} />
                <Text style={styles.tiltenote}>
                    Follow the arrow to scan card
                </Text>
            </View>
            <Image style={styles.areascan} source={ICON_AREASCAN} />
            <Image style={styles.arrowright} source={ICON_ARROW_RIGHT} />

        </PrimaryBackground>
    );
};

export default React.memo(Error);
