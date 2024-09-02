import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from '@expo-google-fonts/oswald';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../infrastructure/theme';
import { Navigation } from '../infrastructure/theme/navigation';
import { LocationProvider } from '../services/location/LocationContext';
import { RestaurantProvider } from '../services/restaurant/RestaurantContext';

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
            <Navigation />
          </RestaurantProvider>
        </LocationProvider>
      </SafeAreaProvider>
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
