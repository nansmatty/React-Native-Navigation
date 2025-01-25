import {NavigationContainer} from '@react-navigation/native';
// import {StyleSheet} from 'react-native';
import RootNavigator from './src/RootNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     padding: 10,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

export default App;
