import React from 'react';
import { Image, View, Text, } from 'react-native';
import { FlatButton, PrimaryBackground } from '../../../component';
import { styles } from './Done.style';
import { ICON_ARROW_BOTTOM, ICON_DONE, ICON_HEART } from '../../../../../assets';
import { useDispatch , useSelector} from 'react-redux';
import { logOut, resetScan , RootState, showLoading, hideLoading} from '../../../shared-state';

const Done: React.FC = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state: RootState) => state.loading.isLoading);
    const handleLogout = () => {
        dispatch(showLoading('Đang xử lý ...'))
        dispatch(resetScan());
        dispatch(logOut());
        dispatch(hideLoading(''))
    };

    return (
        <PrimaryBackground headerText="done">
            <>
            {isLoading && <Loading message="Đang xử lý..." />}
            </>
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
