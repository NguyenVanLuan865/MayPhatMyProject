import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { FlatButton, FrameInfoUser, PrimaryBackground } from '../../../component';
import { styles } from './Done.style';
import { ICON_ARROW_BOTTOM, ICON_DONE, ICON_HEART } from '../../../../../assets';
import { useDispatch} from 'react-redux';
import { logOut } from '../../../shared-state';
const Done: React.FC = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
      dispatch(logOut());
    };

    
    return (
        <PrimaryBackground headerText="done">
            <Image
                source={ICON_DONE}
                style={styles.icondone}
            />
            <View style={styles.favourite}>
            <Text style={styles.titlenote}>
                Enjoy your noodles{'  '}
            </Text>
            <Image
                source={ICON_HEART}
                style={styles.iconheart}
            />
            </View>

            <FlatButton
                title='Back to home'
                containerStyle={styles.button}
                onPress={handleLogout}
            />
            <Text style={styles.titleinstruct}>Get them below</Text>
            <Image
                source={ICON_ARROW_BOTTOM}
                style={styles.iconarrowbottom}
            />
        </PrimaryBackground>
    );
};

export default React.memo(Done);
