import { StyleSheet } from 'react-native';
import { scaleHeight, scaleWidth, scale,HEIGHT,  WITDH  } from '../../../resource';
export const styles = StyleSheet.create({
    tiltenote: {
        fontSize: scale(48),
        fontFamily: 'Nunito-Bold',
        color: '#AE0808',
    },
    notification: {
        fontSize: scale(48),
        fontFamily: 'Nunito-Bold',
        color: '#AE0808',
        marginTop: scaleHeight(56)
    },
    again: {
        width: scaleWidth(356),
        height: scaleHeight(81),
        backgroundColor: '#D86643',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(20),
        marginTop: scaleHeight(48)
    },
    tilteagain: {
        fontSize: scale(36),
        fontFamily: 'Nunito-Bold',
        color: '#FFF'
    },
    viewnote: {
        width: scaleWidth(808),
        height: scaleHeight(118),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: scaleHeight(51)
    },
    iconscan: {
        width: scaleWidth(108.17),
        height: scaleHeight(88.5),
    },
    error: {
        width: scaleWidth(303),
        height: scaleHeight(363),
        marginTop: scaleHeight(49)
    },
    areascan: {
        width: scaleWidth(292),
        height: scaleHeight(363),
        marginTop: scaleHeight(135),
    },
    arrowright: {
        position: 'absolute',
        width: scaleWidth(168),
        height: scaleHeight(97),
        top: scaleHeight( 1555),
        left: scaleWidth(820)
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
      },
});