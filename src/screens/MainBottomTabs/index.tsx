import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@screens/MainBottomTabs/Home';
import Settings from '@screens/MainBottomTabs/Settings';

const Tab = createBottomTabNavigator();

export default function MainBottomTabs(): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
