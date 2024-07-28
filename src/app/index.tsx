import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { RestaurantScreen } from '../features/restaurants/screens/RestaurantScreen';
import { theme } from '../infrastructure/theme';

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
