import { LocationContext } from '@/src/services/location/LocationContext';
import { RestaurantContext } from '@/src/services/restaurant/RestaurantContext';
import { RootStackParamList } from '@/src/utils/models';
import React, { useContext, useEffect, useState } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import styled from 'styled-components';
import { MapCallout } from '../components/MapCallout/MapCallout';
import { Search } from '../components/Search/Search';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

type Props = NativeStackScreenProps<RootStackParamList, 'Restaurants'>;

export const MapScreen = ({ navigation }: Props) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location!;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate('RestaurantDetail', { restaurant })
                }
              >
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
