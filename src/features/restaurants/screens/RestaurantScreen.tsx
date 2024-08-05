import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { RestaurantInfoCard } from '../components/RestaurantInfoCard/RestaurantInfoCard';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const SearchList = styled.View`
  flex-grow: 1;
  padding: ${(props) => props.theme.space[3]};
`;

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
      <SearchList>
        <RestaurantInfoCard />
      </SearchList>
    </SafeArea>
  );
};
