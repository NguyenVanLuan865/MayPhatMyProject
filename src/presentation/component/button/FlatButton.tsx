import React from 'react';
import {
    StyleSheet,
    Text,
    StyleProp,
    ViewStyle,
    TouchableOpacity,
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export interface FlatButtonProps {
    containerStyle?: StyleProp<ViewStyle>;
    title: string;
    onPress?: () => void;
}
import { scaleHeight, scaleWidth, scale } from '../../resource';
const _FlatButton: React.FC<FlatButtonProps> = (props) => {
    const {
        title,
        onPress,
        containerStyle,
    } = props;

    const isMultiLine = Array.isArray(title);
    return (
        <View style={[styles.container, containerStyle]}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <View style={{ height: '50%', backgroundColor: '#FFB906' }} />
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['#FFB706', '#FF7506']}
                    style={styles.linearGradient}>
                    <View style={{ width: '70%', height: scaleHeight(4), marginTop: scaleHeight(37), flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ width: scaleWidth(270), height: scaleHeight(4), backgroundColor: 'white', }} />
                        <View style={{ width: scaleWidth(83), height: scaleHeight(4), backgroundColor: 'white', }} />
                        <View style={{ width: scaleWidth(26), height: scaleHeight(4), backgroundColor: 'white', }} />

                    </View>
                </LinearGradient>
                <Text style={[styles.title]}>{title}</Text>
            </TouchableOpacity>
            <View style={styles.shadow}></View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: scaleHeight(659),
        height: scaleWidth(109.93),
    },
    button: {
        width: scaleHeight(659),
        height: scaleWidth(109.93),
        borderRadius: scale(200),
        overflow: 'hidden',
        zIndex: 1,
    },
    title: {
        color: "#A31616",
        fontFamily: 'PaytoneOne-Regular',
        fontSize: scale(48),
        position: 'absolute',
        top: scaleHeight(15),
        left: scaleWidth(130),
    },
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadow: {
        width: scaleHeight(659),
        height: scaleWidth(109.93),
        borderRadius: scale(200),
        overflow: 'hidden',
        backgroundColor: 'white',
        position: 'absolute',
        left: scale(10),
        top: scale(10),
        zIndex: 0
    }
});

export const FlatButton = React.memo(_FlatButton);
