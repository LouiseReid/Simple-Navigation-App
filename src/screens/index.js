import React from 'react';
import { Navigation } from 'react-native-navigation';
import FirstTab from './FirstTab';
import SecondTab from './SecondTab';
import ThirdTab from './ThirdTab';
import FourthTab from './FourthTab';
import SideMenu from './SideMenu';

export function registerScreens() {
  Navigation.registerComponent('navigationApp.FirstTabScreen', () => FirstTab)
  Navigation.registerComponent('navigationApp.SecondTabScreen', () => SecondTab)
  Navigation.registerComponent('navigationApp.ThirdTabScreen', () => ThirdTab)
  Navigation.registerComponent('navigationApp.FourthTabScreen', () => FourthTab)
  Navigation.registerComponent('navigationApp.SideMenu', () => SideMenu)
}
