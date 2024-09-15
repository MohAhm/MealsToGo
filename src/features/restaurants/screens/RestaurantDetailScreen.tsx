import { SafeArea } from '@/src/components/utility/SafeArea';
import React from 'react';
import { RestaurantInfoCard } from '../components/RestaurantInfoCard/RestaurantInfoCard';

export const RestaurantDetailScreen = ({ route }: any) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};
