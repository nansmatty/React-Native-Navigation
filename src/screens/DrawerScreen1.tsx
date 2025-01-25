import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerNavigationParamsList} from '../components/drawer/DrawerNavigation';
import {useNavigation} from '@react-navigation/native';

type DrawerScreen1NavigationProps = {
  navigation: DrawerNavigationProp<DrawerNavigationParamsList, 'DrawerScreen1'>;
};

const DrawerScreen1: React.FC<DrawerScreen1NavigationProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>DrawerScreen1</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
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

export default DrawerScreen1;
