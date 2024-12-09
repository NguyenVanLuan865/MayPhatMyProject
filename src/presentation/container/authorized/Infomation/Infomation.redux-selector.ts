import { useSelector } from 'react-redux';
import { RootState } from '../../../shared-state';

export const useInfomationSelectors = () => {
    const userInfo = useSelector((state: RootState) => state.authentication.user);
    const numberCupOfNoodles = useSelector((state: RootState) => state.noodleMachine.numberCupOfNoodles);

    return { userInfo, numberCupOfNoodles };
};
