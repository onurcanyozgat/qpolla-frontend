import * as React from 'react';
import { useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, DarkTheme, NavigationContainer } from '@react-navigation/native'

import PollScreen from '../qpoll/PollScreen';
import QPollScreen from "../qpoll/QPollScreen";
import CategoryScreen from "../category/CategoryScreen";
import ProfileScreen from "../profile/ProfileScreen";
import SettingScreen from "../setting/SettingScreen";
import HomeScreen from "../_homescreen/HomeScreen";

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    primary: 'rgb(255, 255, 255)',
    background: 'rgb(195, 224, 229)',
    card: 'rgb(65, 114, 159)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(39, 68, 114)',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function NavScreen() {
  const scheme = useColorScheme();
    return (
      <NavigationContainer theme={scheme === 'dark' ? MyTheme : MyTheme}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="pollScreen" component={PollScreen} />
          <Tab.Screen name="qpoll" component={QPollScreen} />
          <Tab.Screen name="Kategoriler" component={CategoryScreen} />
          <Tab.Screen name="Profil" component={ProfileScreen} />
          <Tab.Screen name="Ayarlar" component={SettingScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

