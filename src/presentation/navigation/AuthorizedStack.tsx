import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Infomation from '../container/authorized/Infomation/Infomation.view';
import Done from '../container/authorized/Done/Done.view';

type AuthStackParamList = {
    Infomation: undefined;
    Done: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthorizedNavigation: React.FC = () => {
    return (
        <AuthStack.Navigator initialRouteName="Infomation">
            <AuthStack.Screen
                name="Infomation"
                component={Infomation}
                options={{ headerShown: false }}
            />
            <AuthStack.Screen
                name="Done"
                component={Done}
                options={{ headerShown: false }}
            />
        </AuthStack.Navigator>
    );
};

export default AuthorizedNavigation;
