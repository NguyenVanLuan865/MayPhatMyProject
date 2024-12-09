import React from 'react';
import { Image, View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import { FlatButton, FrameInfoUser, PrimaryBackground, Loading } from '../../../component';
import { styles } from './Infomation.style';
import {
    ICON_CUP_OF_NOODLES_1,
    ICON_CUP_OF_NOODLES_2,
    ICON_CUP_OF_NOODLES_3,
    ICON_SELECTED,
    ICON_UNAVAILABLECUP,
} from '../../../../../assets';
import { useNavigation } from '@react-navigation/native';
import { submitNoodleAction , showLoading, hideLoading, RootState} from '../../../shared-state';
import { useInfomationSelectors } from './Infomation.redux-selector';
import { useInfomationHook } from './Infomation.hooks';
import { IconData } from './types';
import { useDispatch, useSelector } from 'react-redux';

const icon = [
    { id: 1, icon: ICON_CUP_OF_NOODLES_1 },
    { id: 2, icon: ICON_CUP_OF_NOODLES_2 },
    { id: 3, icon: ICON_CUP_OF_NOODLES_3 },
];

const Infomation: React.FC = () => {
    const navigation = useNavigation();
    const { userInfo, numberCupOfNoodles } = useInfomationSelectors();
    const { selectedIconIds, setSelectedIconIds, A } = useInfomationHook(userInfo, numberCupOfNoodles);
    const  dispatch = useDispatch();
    const isLoading = useSelector((state: RootState) => state.loading.isLoading);
    const handlePress = (id: number) => {
        if (selectedIconIds.includes(id)) {
            if (selectedIconIds.length === 1) {
                setSelectedIconIds([]);
            } else {
                setSelectedIconIds(selectedIconIds.filter(itemId => itemId < id));
            }
        } else {
            const updatedSelectedIds = [...Array(id).keys()].map((i) => i + 1);
            setSelectedIconIds(updatedSelectedIds);
        }
    };

    const renderButtonCupOfNoodles = (item: IconData) => {
        const isEnabled = item.id <= A;
        return (
            <>
                <TouchableOpacity
                    onPress={() => handlePress(item.id)}
                    disabled={!isEnabled}
                    style={styles.buttoncupofnoodles}>
                    <Image source={isEnabled ? item.icon : ICON_UNAVAILABLECUP} style={styles.iconcupofnoodles} />
                    {isEnabled && selectedIconIds.includes(item.id) && (
                        <Image source={ICON_SELECTED} style={styles.buttonselected} />
                    )}
                </TouchableOpacity>
                {!isEnabled ? <Text style={styles.disabledText}>Unavailable</Text> : null}
            </>
        );
    };

    const handleSubmit = async () => {
        if (!selectedIconIds || selectedIconIds.length === 0) {
            Alert.alert('Thông báo', 'Vui lòng chọn số ly mỳ.', [{ text: 'OK' }]);
            return;
        }
        const maxSelectedIconIds = Math.max(...selectedIconIds);
        Alert.alert(
            'Xác nhận',
            `Bạn có chắc chắn chọn ${maxSelectedIconIds} ly mỳ không?`,
            [
                { text: 'Hủy', style: 'cancel' },
                {
                    text: 'OK',
                    onPress: async () => {
                        dispatch(showLoading('Đang xử lý ...'))
                        const resultAction = await dispatch(submitNoodleAction({ selectedIconIds, userInfo }));
                        if (submitNoodleAction.fulfilled.match(resultAction)) {
                            dispatch(hideLoading('Hoàn thành'))
                            navigation.navigate('Done');
                        } else {
                            console.error(resultAction.payload);
                        }
                    },
                },
            ],
            { cancelable: true }
        );
    };

    if (!userInfo) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <PrimaryBackground headerText="Infomation">
            <>
            {isLoading && <Loading message="Đang xử lý..." />}
            </>
            <FrameInfoUser user={userInfo} />
            <View style={styles.viewflatlist}>
                <FlatList
                    data={icon}
                    renderItem={({ item }) => renderButtonCupOfNoodles(item)}
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={styles.viewbutton}
                    horizontal
                />
            </View>
            <View>
                <Text style={styles.titlenote}>
                    <Text style={styles.number}>{userInfo.remainingNoodles}</Text> cups of noodles left this month
                </Text>
                <FlatButton title="Get your noodles" containerStyle={styles.button} onPress={handleSubmit} />
            </View>
        </PrimaryBackground>
    );
};

export default React.memo(Infomation);
