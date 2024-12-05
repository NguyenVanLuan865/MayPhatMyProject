import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { FlatButton, FrameInfoUser, PrimaryBackground } from '../../../component';
import { styles } from './Error.style';
import { ICON_AREASCAN, ICON_ARROW_BOTTOM, ICON_ARROW_RIGHT, ICON_DONE, ICON_ERROR, ICON_HEART, ICON_SCAN } from '../../../../../assets';
import QRCode from 'react-native-qrcode-svg';
const Error: React.FC = () => {
    const userId = 'user123';
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
