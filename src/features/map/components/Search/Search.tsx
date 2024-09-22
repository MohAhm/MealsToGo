import { LocationContext } from '@/src/services/location/LocationContext';
import React, { useContext, useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 20px;
  width: 100%;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon={'map'}
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
