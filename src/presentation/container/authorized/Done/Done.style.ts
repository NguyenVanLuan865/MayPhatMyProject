import { StyleSheet } from 'react-native';
import { scaleHeight, scaleWidth, scale,HEIGHT,  WITDH  } from '../../../resource';
export const styles = StyleSheet.create({
    button: {
        marginTop: scaleHeight(208)
    },
    icondone: {
        width: scaleWidth(527),
        height: scaleHeight(607.9),
        marginTop: scaleHeight(56)
    },
    titlenote: {
        fontSize: scale(64),
        fontFamily: 'PaytoneOne-Regular',
        color: '#C71A1A',
        textAlign: 'center',
    },
    favourite: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconheart: {
        width: scaleWidth(80),
        height: scaleHeight(80),
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleinstruct: {
        fontSize: scale(48),
        fontFamily: 'MPLUS1p-ExtraBold',
        marginTop: scaleHeight(74),
        textAlign: 'center',
        color: '#F8C135'
    },
    iconarrowbottom: {
        width: scaleWidth(45.3),
        height: scaleHeight(77.04),
        marginTop: scaleHeight(8),
    }
});