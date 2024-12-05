import React, { useState, useEffect } from 'react';
import { Image, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { FlatButton, FrameInfoUser, PrimaryBackground } from '../../../component';
import { styles } from './Infomation.style';
import {
    ICON_CUP_OF_NOODLES_1,
    ICON_CUP_OF_NOODLES_2,
    ICON_CUP_OF_NOODLES_3,
    ICON_SELECTED,
    ICON_UNAVAILABLECUP
} from '../../../../../assets';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, } from '../../../shared-state';
import { useNavigation } from '@react-navigation/native';
import { submitNoodleAction } from '../../../shared-state';

interface IconData {
    id: number;
    icon: any;
}

const icon = [
    {
        id: 1,
        icon: ICON_CUP_OF_NOODLES_1,
    },
    {
        id: 2,
        icon: ICON_CUP_OF_NOODLES_2,
    },
    {
        id: 3,
        icon: ICON_CUP_OF_NOODLES_3,
    },
]
const Infomation: React.FC = () => {
    const [selectedIconIds, setSelectedIconIds] = useState<number[]>([]);
    const [A, setA] = useState(3);
    const navigation = useNavigation();
    const userInfo = useSelector((state: RootState) => state.authentication.user);
    console.log(userInfo?.remainingNoodles)
    const numberCupOfNoodles = useSelector((state: RootState) => state.noodleMachine.numberCupOfNoodles);
    console.log(numberCupOfNoodles)

    if (!userInfo) {
        return <View>
            <Text>
                loangd ding
            </Text>
        </View>;
    }

    useEffect(() => {
        const calculatedA = Math.min(userInfo?.remainingNoodles, numberCupOfNoodles);
        setA(calculatedA);
    }, [userInfo.remainingNoodles, numberCupOfNoodles]);


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
                {!isEnabled ? (
                    <Text style={styles.disabledText}>Unavailable</Text>
                ) : null}
            </>

        );
    };

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        const resultAction = await dispatch(submitNoodleAction({ selectedIconIds, userInfo }));

        if (submitNoodleAction.fulfilled.match(resultAction)) {
            navigation.navigate('Done');
        } else {
            console.error(resultAction.payload);
        }
    };
    return (
        <PrimaryBackground headerText="infomation">
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
                <FlatButton
                    title='Get your noodles'
                    containerStyle={styles.button}
                    onPress={handleSubmit}
                />
            </View>
        </PrimaryBackground>
    );
};

export default React.memo(Infomation);
