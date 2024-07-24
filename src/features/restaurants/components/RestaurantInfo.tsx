import { IRestaurant } from '@/src/utils/models';
import React from 'react';
import { Text } from 'react-native';

type Props = {
  restaurant?: IRestaurant;
};

export const RestaurantInfo = ({ restaurant }: Props) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant || {};

  return <Text>Restaurant Info</Text>;
};
