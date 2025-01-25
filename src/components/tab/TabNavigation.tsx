import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabScreen1 from '../../screens/TabScreen1';
import TabScreen2 from '../../screens/TabScreen2';

export type BottomTabParamsList = {
  TabScreen1: undefined;
  TabScreen2: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamsList>();

const TabNavigation: React.FC = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="TabScreen1" component={TabScreen1} />
      <BottomTab.Screen name="TabScreen2" component={TabScreen2} />
    </BottomTab.Navigator>
  );
};

export default TabNavigation;
