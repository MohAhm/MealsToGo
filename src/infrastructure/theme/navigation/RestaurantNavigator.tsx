import { RestaurantScreen } from '@/src/features/restaurants/screens/RestaurantScreen';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen name="Restaurant" component={RestaurantScreen} />
    </RestaurantStack.Navigator>
  );
};
