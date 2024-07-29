import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from '@expo-google-fonts/oswald';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { RestaurantScreen } from '../features/restaurants/screens/RestaurantScreen';
import { theme } from '../infrastructure/theme';

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
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
