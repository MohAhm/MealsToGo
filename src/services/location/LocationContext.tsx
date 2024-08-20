import { ILocation } from '@/src/utils/models';
import { createContext, useEffect, useState } from 'react';
import { locationRequest, locationTransform } from './LocationService';

interface LocationContextProps {
  location: ILocation | null;
  isLoading: boolean;
  error: any;
  search: (searchKeyword: string) => void;
  keyword: string;
}

export const LocationContext = createContext<LocationContextProps>(
  // eslint-disable-next-line prettier/prettier
  {} as LocationContextProps
);

export const LocationProvider = ({ children }: any) => {
  const [keyword, setKeyword] = useState('san francisco');
  const [location, setLocations] = useState<ILocation | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword: string) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    locationRequest(searchKeyword.toLocaleLowerCase())
      .then(locationTransform)
      .then((res) => {
        setIsLoading(false);
        setLocations(res);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    onSearch(keyword);
  }, []);

  return (
    <LocationContext.Provider
      value={{ location, isLoading, error, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
