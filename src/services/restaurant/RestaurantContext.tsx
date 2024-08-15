import { Restaurant } from '@/src/utils/models';
import { createContext, useEffect, useState } from 'react';
import { restaurantRequest, restaurantTransform } from './RestaurantService';

interface RestaurantContextProps {
  restaurants: Restaurant[];
  isLoading: boolean;
  error: any;
}

export const RestaurantContext = createContext<RestaurantContextProps>(
  // eslint-disable-next-line prettier/prettier
  {} as RestaurantContextProps
);

export const RestaurantProvider = ({ children }: any) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantRequest()
        .then(restaurantTransform)
        .then((res) => {
          setIsLoading(false);
          setRestaurants(res);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
