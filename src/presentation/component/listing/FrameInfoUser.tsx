import React from 'react';
import { StyleSheet, StatusBar, ImageBackground, SafeAreaView, Text, Image, View } from 'react-native';
import { scale, scaleHeight, scaleWidth } from '../../resource';
interface User {
    name: string;
    birthday: string;
    gender: string;
    department: string;
    remainingNoodles: number;
    avatar: string;
}
interface FrameInfoUserProps {
    user: User;
}

const _FrameInfoUserComponent: React.FC<FrameInfoUserProps> = ({ user }) => {
    return (
        <View style={{ marginTop: scaleHeight(56) }}>
            <View style={styles.container}>
                <View style={styles.frame}>
                    <Image
                        source={{ uri: `data:image/png;base64,${user.avatar}` }}
                        style={styles.avatar}>
                    </Image>
                    <View>
                        <Text style={styles.personalInfo}>Full name</Text>
                        <Text style={styles.personalInfo}>Birthday</Text>
                        <Text style={styles.personalInfo}>Gender</Text>
                        <Text style={styles.personalInfo}>Deparment</Text>
                    </View>
                    <View>
                        <Text style={styles.info}>{user.name}</Text>
                        <Text style={styles.info}>{user.birthday}</Text>
                        <Text style={styles.info}>{user.gender}</Text>
                        <Text style={styles.info}>{user.department}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.shadow}>

            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: scaleWidth(939),
        height: scaleHeight(348),
        borderRadius: scale(40),
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        zIndex: 1
    },
    shadow: {
        width: scaleWidth(939),
        height: scaleHeight(348),
        borderRadius: scale(40),
        backgroundColor: 'rgba(136, 11, 11, 0.5)',
        position: 'absolute',
        zIndex: 0,
        top: scaleHeight(10),
        right: scaleWidth(15),
    },
    frame: {
        width: scaleWidth(909),
        height: scaleHeight(328),
        borderRadius: scale(40),
        backgroundColor: '#ffc900',
        borderWidth: scale(5),
        borderColor: '#880B0B',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    avatar: {
        width: scaleWidth(228),
        height: scaleHeight(228),
        borderRadius: scale(228),
        backgroundColor: 'red'

    },
    personalInfo: {
        fontSize: scale(36),
        fontFamily: 'Nunito-Bold',
        height: scaleHeight(49),
        color: '#880B0B',
        marginBottom: scaleHeight(20)
    },
    info: {
        fontSize: scale(36),
        fontFamily: 'Nunito-Light',
        height: scaleHeight(49),
        color: '#880B0B',
        marginBottom: scaleHeight(20)
    }
});

export const FrameInfoUser = React.memo(_FrameInfoUserComponent);