import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import StackNavigation from './components/stack/StackNavigation';
import TabNavigation from './components/tab/TabNavigation';

export type RootStackParamsList = {
  Home: undefined;
  StackNavigator: undefined;
  TabNavigator: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="StackNavigator" component={StackNavigation} />
      <Stack.Screen name="TabNavigator" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
