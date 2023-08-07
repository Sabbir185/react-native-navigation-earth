import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { colors } from './src/theme/colors';
import { useFonts } from 'expo-font';
import Text from './src/components/text/text';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import HomeDetails from './src/screens/details';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "Antonia-Medium": require('./assets/fonts/Antonia-medium.ttf'),
    "Spartan-Bold": require('./assets/fonts/Spartan-Bold.ttf'),
    "Spartan-Medium": require('./assets/fonts/Spartan-Medium.ttf'),
  })

  if (!loaded) {
    return <Text>Font is loading...</Text>
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="HomeDetails" component={HomeDetails} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='light' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
