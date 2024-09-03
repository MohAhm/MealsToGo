import { SafeArea } from '@/src/components/utility/SafeArea';
import { RestaurantScreen } from '@/src/features/restaurants/screens/RestaurantScreen';
import { BottomTabParamList, TAB_ICON, TabValue } from '@/src/utils/models';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RestaurantNavigator } from './RestaurantNavigator';

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

export const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurant" component={RestaurantNavigator} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};
