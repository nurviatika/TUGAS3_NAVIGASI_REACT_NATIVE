import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import StartScreen from '../screens/StartScreen';
import DetailOrder from '../screens/Detail/DetailOrder';
import DetailExample from '../screens/Detail/DetailExample';
import Matcha from '../screens/TabScreen/Home';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen name="StartScreen" component={StartScreen} options={{
          headerShown: false
        }}/>
        <Stack.Screen
          name="Main"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={Matcha} />
        <Stack.Screen name="DetailExample" component={DetailExample} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="DetailOrder" component={DetailOrder} options={{
          headerShown: false
        }}/>

        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;