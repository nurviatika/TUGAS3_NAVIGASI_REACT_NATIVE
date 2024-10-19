import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/TabScreen/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native';
import Fav from '../screens/TabScreen/Fav';
import Notif from '../screens/TabScreen/Notif';
import Bag from '../screens/TabScreen/Bag';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Bag') {
            iconName = focused ? 'bag-add' : 'bag-add-outline';
          } else if (route.name === 'Fav') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Notif') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          }

          return (
            <>
              <Ionicons
                name={iconName ?? 'default-icon'}
                size={size}
                color={color}
              />
              <Text>{route.name === 'Home' ? 'Home' : 'Profile'}</Text>
            </>
          );
        },
        tabBarActiveTintColor: '#a3c797', 
        tabBarInactiveTintColor: '#afc2a8', 
        tabBarLabel: () => null, 
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Tab.Screen name="Bag" component={Bag} />
      <Tab.Screen name="Fav" component={Fav}/>
      <Tab.Screen name="Notif" component={Notif} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
