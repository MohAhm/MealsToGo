import { Restaurant } from '@/src/utils/models';
import React from 'react';
import styled from 'styled-components/native';

const MyText = styled.Text``;
export const MapCallout = ({ restaurant }: { restaurant: Restaurant }) => (
  <MyText>{restaurant.name}</MyText>
);
