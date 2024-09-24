import { CompactRestaurantInfo } from '@/src/components/Restaurant/CompactRestaurantInfo';
import { Restaurant } from '@/src/utils/models';
import React from 'react';
import styled from 'styled-components/native';

const MyText = styled.Text``;
export const MapCallout = ({ restaurant }: { restaurant: Restaurant }) => (
  <CompactRestaurantInfo restaurant={restaurant} />
);
