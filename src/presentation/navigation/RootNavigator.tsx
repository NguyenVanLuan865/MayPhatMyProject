import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticationNavigation from './AuthenticationStack';
import AuthorizedNavigation from './AuthorizedStack';
import { useSelector } from 'react-redux';
import { RootState } from '../shared-state';
const RootStack = createNativeStackNavigator();

const RootNavigation: React.FC = () => {
  const currentScreen = useSelector((state: RootState) => state.navigation.currentScreen);
  console.log(currentScreen)
  const { isAuthenticating, isAuthorized } = useSelector((state: RootState) => state.authentication);
  console.log('đã đăng nhập: ',isAuthorized)
  console.log('đang đăng nhập: ',isAuthenticating)

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthorized == true? (
          <RootStack.Screen
            name="AuthorizedNavigation"
            component={AuthorizedNavigation}
          />
        ) : (
          <RootStack.Screen
            name="AuthenticationNavigation"
            component={AuthenticationNavigation}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
