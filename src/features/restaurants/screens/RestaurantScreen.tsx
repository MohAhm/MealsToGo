import { SafeArea } from '@/src/components/utility/SafeArea';
import { RestaurantContext } from '@/src/services/restaurant/RestaurantContext';
import { Restaurant } from '@/src/utils/models';
import React, { useContext } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import styled from 'styled-components/native';
import { RestaurantInfoCard } from '../components/RestaurantInfoCard/RestaurantInfoCard';
import { Search } from '../components/Search/Search';

const RestaurantList = styled(FlatList<Restaurant>).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantScreen = () => {
  const { isLoading, restaurants } = useContext(RestaurantContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading animating={true} color={MD2Colors.blue300} size={50} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }: ListRenderItemInfo<Restaurant>) => (
          <RestaurantInfoCard restaurant={item} />
        )}
        keyExtractor={(item: any) => {
          return item.name;
        }}
      />
    </SafeArea>
  );
};
