import { Restaurant, RestaurantResponse } from '@/src/utils/models';
import camelize from 'camelize';
import { mocks } from './mock';

export const restaurantRequest = (location = '37.7749295,-122.4194155') => {
  return new Promise<RestaurantResponse>((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject('not found');
    }
    resolve(mock as RestaurantResponse);
  });
};

export const restaurantTransform = ({
  results = [],
}: RestaurantResponse): Restaurant => {
  const mapResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });

  return camelize(mapResults);
};
