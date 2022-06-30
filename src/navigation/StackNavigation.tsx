import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AddCryptoScreen from '../screens/AddCryptoScreen/AddCryptoScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#476280',
        },
        headerTintColor: '#F2F2F2',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'CryptoTracker Pro'}}
      />
      <Stack.Screen
        name="AddCryptoScreen"
        component={AddCryptoScreen}
        options={{
          title: 'Back to list',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: '#476280',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigation;
