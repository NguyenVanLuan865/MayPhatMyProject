import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Infomation from '../container/authorized/Infomation';
import Done from '../container/authorized/Done';
import { AuthorizedStoryboardParamList } from '../storyboards';

const AuthStack = createNativeStackNavigator<AuthorizedStoryboardParamList>();

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
