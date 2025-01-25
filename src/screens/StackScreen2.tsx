import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigationParamsList} from '../components/stack/StackNavigation';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

type StackScreen2NavigationProp = StackNavigationProp<
  StackNavigationParamsList,
  'StackScreen2'
>;

type StackScreen2RouteProp = RouteProp<
  StackNavigationParamsList,
  'StackScreen2'
>;

const StackScreen2: React.FC = () => {
  const navigation = useNavigation<StackScreen2NavigationProp>();
  const route = useRoute<StackScreen2RouteProp>();

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Stack Screen 2</Text>
      <Text style={styles.sectionTitle}>Item Id: {route.params.itemId}</Text>
      <Button
        title="Go back to Stack Screen 1"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 2,
    // marginBottom: 10,
  },
});

export default StackScreen2;
