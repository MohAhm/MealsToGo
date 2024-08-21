import { LocationContext } from '@/src/services/location/LocationContext';
import React, { useContext, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        onSubmitEditing={() => {
          search(searchQuery);
        }}
        onChangeText={setSearchQuery}
        value={searchQuery}
        mode="view"
      />
    </SearchContainer>
  );
};
