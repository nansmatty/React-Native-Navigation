import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerScreen1 from '../../screens/DrawerScreen1';
import DrawerScreen2 from '../../screens/DrawerScreen2';

export type DrawerNavigationParamsList = {
  DrawerScreen1: undefined;
  DrawerScreen2: undefined;
};

const Drawer = createDrawerNavigator<DrawerNavigationParamsList>();

const DrawerNavigation: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DrawerScreen1" component={DrawerScreen1} />
      <Drawer.Screen name="DrawerScreen2" component={DrawerScreen2} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
