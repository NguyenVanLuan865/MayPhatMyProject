import { StyleSheet } from 'react-native';
import { scaleHeight, scaleWidth, scale, HEIGHT, WITDH } from '../../../resource';
export const styles = StyleSheet.create({
    areascan: {
        width: scaleWidth(292),
        height: scaleHeight(363),
        marginTop: scaleHeight(135),
    },
    viewnote: {
        width: scaleWidth(808),
        height: scaleHeight(118),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: scaleHeight(128)
    },
    iconscan: {
        width: scaleWidth(108.17),
        height: scaleHeight(88.5),
    },
    tiltenote: {
        fontSize: scale(48),
        fontFamily: 'Nunito-Bold',
        color: '#AE0808'
    },
    container: {
        width: scaleWidth(919),
        height: scaleHeight(518),
        borderRadius: scale(40),
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        zIndex: 1,
        marginTop: scaleHeight(45)
    },
    shadow: {
        width: scaleWidth(919),
        height: scaleHeight(518),
        borderRadius: scale(40),
        backgroundColor: 'rgba(136, 11, 11, 0.5)',
        position: 'absolute',
        zIndex: 0,
        top: scaleHeight(10),
        right: scaleWidth(15),
        marginTop: scaleHeight(45)
    },
    frame: {
        width: scaleWidth(891),
        height: scaleHeight(488),
        borderRadius: scale(40),
        backgroundColor: '#ffc900',
        borderWidth: scale(5),
        borderColor: '#880B0B',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    screenscan: {
        width: scaleWidth(851),
        height: scaleHeight(448),
        borderRadius: scale(20),
        backgroundColor: 'black',
        overflow: 'hidden',
    },
    arrowright: {
        position: 'absolute',
        width: scaleWidth(168),
        height: scaleHeight(97),
        top: scaleHeight(1555),
        left: scaleWidth(820)
    },
    labelscan: {
        width: scaleWidth(814),
        height: scaleHeight(457),
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonPermission: {
        width: scaleWidth(128),
        height: scaleHeight(128),
        borderRadius: scale(128),
        backgroundColor: 'rgba(255, 255, 255, 0.63)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    triangleUp: {
        width: 0,
        height: 0,
        borderLeftWidth: scaleHeight(56.5),
        borderTopWidth: scaleWidth(65.5/2),
        borderBottomWidth: scaleWidth(65.5/2),
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: '#000',
        marginLeft: scaleWidth(5),
    },
    cameraContainer: {
        width: '100%',
        height: '100%',
        backgroundColor:'red'
    },

    camera: {
        width: '100%',
        height: '100%',
    }
});