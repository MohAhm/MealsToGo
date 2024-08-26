import { Restaurant, RestaurantResponse } from '@/src/utils/models';
import camelize from 'camelize';
import { mockImages, mocks } from './mock';

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
}: RestaurantResponse): Restaurant[] => {
  const mapResults = results.map((restaurant) => {
    const photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...restaurant,
      address: restaurant.vicinity,
      photos,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    };
  });

  return camelize(mapResults);
};
