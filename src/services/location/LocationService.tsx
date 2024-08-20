import { ILocation, Location, LocationsResponse } from '@/src/utils/models';
import camelize from 'camelize';
import { locations } from './locationMock';

export const locationRequest = (searchTerm: string) => {
  return new Promise<Location>((resolve, reject) => {
    const locationMockX: LocationsResponse = locations;
    const mock = locationMockX[searchTerm];
    if (!mock) {
      reject('not found');
    }
    resolve(mock);
  });
};

export const locationTransform = (result: Location): ILocation => {
  const formattedResponse = camelize(result);
  const { geometry } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
