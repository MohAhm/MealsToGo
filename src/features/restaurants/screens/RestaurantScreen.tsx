import { SafeArea } from '@/src/components/utility/SafeArea';
import { RestaurantContext } from '@/src/services/restaurant/RestaurantContext';
import { Restaurant } from '@/src/utils/models';
import React, { useContext, useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { RestaurantInfoCard } from '../components/RestaurantInfoCard/RestaurantInfoCard';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList<Restaurant>).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { restaurants } = useContext(RestaurantContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          mode="view"
        />
      </SearchContainer>
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
