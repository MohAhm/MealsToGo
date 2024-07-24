import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantScreen } from '../features/restaurants/screens/RestaurantScreen';

export default function Index() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
