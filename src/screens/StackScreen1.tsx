import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigationParamsList} from '../components/stack/StackNavigation';
import {useNavigation} from '@react-navigation/native';

type StackScreen1NavigationProp = StackNavigationProp<
  StackNavigationParamsList,
  'StackScreen1'
>;

const StackScreen1: React.FC = () => {
  const navigation = useNavigation<StackScreen1NavigationProp>();

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Stack Screen 1</Text>
      <Button
        onPress={() => navigation.navigate('StackScreen2', {itemId: 123})}
        title="Go To Stack Screen 2"
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
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: 10,
  },
});

export default StackScreen1;
