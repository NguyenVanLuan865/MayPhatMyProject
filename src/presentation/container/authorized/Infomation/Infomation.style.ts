import { StyleSheet } from 'react-native';
import { scaleHeight, scaleWidth, scale,HEIGHT,  WITDH  } from '../../../resource';
export const styles = StyleSheet.create({
    buttoncupofnoodles: {
        width: scaleWidth(270),
        height: scaleHeight(370),
        alignItems: 'center',
    },
    iconcupofnoodles: {
        width: scaleWidth(213),
        height: scaleHeight(370),
        zIndex: 1,
    },
    viewbutton: {
        width: '100%',
        height: scaleHeight(370),
        justifyContent: 'space-around',
        marginTop: scaleHeight(32),
    },
    titlenote: {
        fontFamily: 'PaytoneOne-Regular',
        fontSize: scale(24),
        color: '#9c6666',
        textAlign: 'center',
    },
    viewflatlist: {
        height: scaleHeight(420),
        width: '90%',
    },
    number: {
        fontSize: scale(36),
        color: '#A31616',
    },
    button: {
        marginTop: scaleHeight(118)
    },
    buttonselected: {
        position: 'absolute',
        top: scaleHeight(45),
        width: scaleWidth(270),
        height: scaleHeight(271),
        zIndex: 0
    },
    disabledText: {
        fontSize: scale(36),
        fontFamily: 'PaytoneOne-Regular',
        color: '#a09a9a',
        zIndex: 1,
        textAlign: 'center',
        position: 'absolute',
        top: scaleHeight(340),
        left: scaleWidth(20)
    }
});