import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import QPollScreen from "../qpoll/QPollScreen";
import CategoryScreen from "../category/CategoryScreen";
import ProfileScreen from "../profile/ProfileScreen";
import SettingScreen from "../setting/SettingScreen";

const Tab = createBottomTabNavigator();

export default function NavScreen() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="qpoll" component={QPollScreen} />
          <Tab.Screen name="Kategoriler" component={CategoryScreen} />
          <Tab.Screen name="Profil" component={ProfileScreen} />
          <Tab.Screen name="Ayarlar" component={SettingScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

