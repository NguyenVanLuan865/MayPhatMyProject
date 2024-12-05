import { StyleSheet } from 'react-native';
import { scaleHeight, scaleWidth, scale,HEIGHT,  WITDH  } from '../../../resource';
export const styles = StyleSheet.create({
    tiltenote: {
        fontSize: scale(48),
        fontFamily: 'Nunito-Bold',
        color: '#a09a9a',
        width: scaleWidth(838),
        marginTop: scaleHeight(56),
        textAlign: 'center',
    },
    tiltehighlight: {
        fontSize: scale(56),
        fontFamily: 'Nunito-Bold',
        color: '#FFF'
    },
    frame: {
        width: scaleWidth(574),
        height: scaleHeight(385),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: scaleHeight(80),
    },
    minicup: {
        width: scaleWidth(156),
        height: scaleHeight(271),
    },
    bigcup: {
        width: scaleWidth(228),
        height: scaleHeight(385),
    }
});