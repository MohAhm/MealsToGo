import { RestaurantDetailScreen } from '@/src/features/restaurants/screens/RestaurantDetailScreen';
import { RestaurantScreen } from '@/src/features/restaurants/screens/RestaurantScreen';
import { RootStackParamList } from '@/src/utils/models';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import React from 'react';
import { Text } from 'react-native';

const RestaurantStack = createStackNavigator<RootStackParamList>();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    >
      <RestaurantStack.Screen name="Restaurants" component={RestaurantScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
