import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import StackNavigation from './components/stack/StackNavigation';

export type RootStackParamsList = {
  Home: undefined;
  StackNavigator: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="StackNavigator" component={StackNavigation} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
