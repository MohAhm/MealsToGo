import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from '@expo-google-fonts/oswald';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { SafeArea } from '../components/utility/SafeArea';
import { RestaurantScreen } from '../features/restaurants/screens/RestaurantScreen';
import { theme } from '../infrastructure/theme';

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

export default function Index() {
  const [oswaldLoaded, oswaldError] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded, latoError] = useLato({
    Lato_400Regular,
  });

  useEffect(() => {
    if (oswaldLoaded || oswaldError || latoLoaded || latoError) {
      SplashScreen.hideAsync();
    }
  }, [oswaldLoaded, oswaldError, latoLoaded, latoError]);

  if ((!oswaldLoaded && !oswaldError) || (!latoLoaded && !latoError)) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={() => ({
            headerShown: false,
            tabBarIconStyle: { display: 'none' },
          })}
        >
          <Tab.Screen name="Restaurant" component={RestaurantScreen} />
          <Tab.Screen name="Settings" component={Settings} />
          <Tab.Screen name="Map" component={Map} />
        </Tab.Navigator>
      </NavigationContainer>
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
