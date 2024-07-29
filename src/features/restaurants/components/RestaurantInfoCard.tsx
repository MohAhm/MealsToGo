import { IRestaurant } from '@/src/utils/models';
import React from 'react';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

type Props = {
  restaurant?: IRestaurant;
};

const RestaurantCard = styled(Card)`
  background-color: ${(props: any) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props: any) => props.theme.space[3]};
  background-color: ${(props: any) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  font-family: ${(props: any) => props.theme.fonts.body};
  padding: ${(props: any) => props.theme.space[3]};
  color: ${({ theme }) => theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({ restaurant }: Props) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant || {};

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
