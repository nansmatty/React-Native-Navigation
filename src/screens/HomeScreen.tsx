import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../RootNavigator';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'Home'
>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Home Screen</Text>
      <Button
        title="Stack Navigation"
        onPress={() => navigation.navigate('StackNavigator')}
      />
      <Button
        title="Tab Navigation"
        onPress={() => navigation.navigate('TabNavigator')}
      />
      <Button
        title="Drawer Navigation"
        onPress={() => navigation.navigate('DrawerNavigator')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 2,
  },
});

export default HomeScreen;
