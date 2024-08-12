import { SafeArea } from '@/src/components/utility/SafeArea';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { RestaurantInfoCard } from '../components/RestaurantInfoCard/RestaurantInfoCard';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

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
        data={[{ name: '1' }, { name: '2' }, { name: '3' }]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item: any) => {
          return item.name;
        }}
      />
    </SafeArea>
  );
};
