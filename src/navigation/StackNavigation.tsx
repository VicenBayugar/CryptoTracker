import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AddCryptoScreen from '../screens/AddCryptoScreen';
import HomeScreen from '../screens/HomeScreen';
import theme from '../utils/theme';
import me from '../assets/me.jpg';
import {ProfilePhoto} from './styles';

const Stack = createNativeStackNavigator();

const StackNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: `${theme.colors.blue}`,
        },
        headerTintColor: `${theme.colors.white}`,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'CryptoTracker Pro',
          headerRight: () => <ProfilePhoto source={me} />,
        }}
      />
      <Stack.Screen
        name="AddCryptoScreen"
        component={AddCryptoScreen}
        options={{
          title: 'Back to list',
          headerStyle: {
            backgroundColor: `${theme.colors.white}`,
          },
          headerTintColor: `${theme.colors.blue}`,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigation;
