import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

export const RestaurantCard = styled(Card)`
  background-color: ${(props: any) => props.theme.colors.bg.primary};
  margin-bottom: ${(props: any) => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props: any) => props.theme.space[3]};
  background-color: ${(props: any) => props.theme.colors.bg.primary};
`;

export const Address = styled.Text`
  font-family: ${(props: any) => props.theme.fonts.body};
  font-size: ${(props: any) => props.theme.fontSizes.caption};
`;

export const Info = styled.View`
  padding: ${(props: any) => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props: any) => props.theme.space[2]};
  padding-bottom: ${(props: any) => props.theme.space[2]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
