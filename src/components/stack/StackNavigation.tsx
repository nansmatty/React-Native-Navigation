import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StackScreen1 from '../../screens/StackScreen1';
import StackScreen2 from '../../screens/StackScreen2';

export type StackNavigationParamsList = {
  StackScreen1: undefined;
  StackScreen2: {itemId: number};
};

const Stack = createStackNavigator<StackNavigationParamsList>();

const StackNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StackScreen1" component={StackScreen1} />
      <Stack.Screen
        name="StackScreen2"
        component={StackScreen2}
        options={({route}) => ({title: `Item ${route.params.itemId}`})}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
