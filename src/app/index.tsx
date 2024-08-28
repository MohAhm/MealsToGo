import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from '@expo-google-fonts/oswald';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { SafeArea } from '../components/utility/SafeArea';
import { RestaurantScreen } from '../features/restaurants/screens/RestaurantScreen';
import { theme } from '../infrastructure/theme';
import { LocationProvider } from '../services/location/LocationContext';
import { RestaurantProvider } from '../services/restaurant/RestaurantContext';
import { BottomTabParamList, TAB_ICON, TabValue } from '../utils/models';

type BottomTabRouteProp = RouteProp<BottomTabParamList>;

const Tab = createBottomTabNavigator<BottomTabParamList>();

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

const createScreenOptions = ({ route }: { route: BottomTabRouteProp }) => {
  const iconName = TAB_ICON[route.name];
  return {
    headerShown: false,
    tabBarIcon: ({ size, color }: { size: number; color: string }) => (
      <Ionicons name={iconName as TabValue} size={size} color={color} />
    ),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  };
};

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
      <SafeAreaProvider>
        <LocationProvider>
          <RestaurantProvider>
            <Tab.Navigator screenOptions={createScreenOptions}>
              <Tab.Screen name="Restaurant" component={RestaurantScreen} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </RestaurantProvider>
        </LocationProvider>
      </SafeAreaProvider>
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
