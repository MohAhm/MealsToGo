import { Restaurant } from '@/src/utils/models';
import { createContext, useContext, useEffect, useState } from 'react';
import { LocationContext } from '../location/LocationContext';
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
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (locationString: string) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantRequest(locationString)
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
    if (location) {
      const locationString = `${location?.lat},${location?.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
