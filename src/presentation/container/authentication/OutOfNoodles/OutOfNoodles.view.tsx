import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { PrimaryBackground } from '../../../component';
import { styles } from './OutOfNoodles.style';
import { ICON_EMPTYCUP } from '../../../../../assets';


const OutOfNoodles: React.FC = () => {
    return (
        <PrimaryBackground headerText="out of noodles">
            <Text style={styles.tiltenote}>
            {'There is '}<Text style={styles.tiltehighlight}>0</Text>{' cup of noodles left in the machine. Please fill in to continue.'}
            </Text>
            <View style={styles.frame}>
                <Image source={ICON_EMPTYCUP} style={styles.minicup}/>
                <Image source={ICON_EMPTYCUP} style={styles.bigcup}/>
                <Image source={ICON_EMPTYCUP} style={styles.minicup}/>
            </View>
        </PrimaryBackground>
    );
};

export default React.memo(OutOfNoodles);