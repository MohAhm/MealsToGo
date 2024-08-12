export interface IRestaurant {
  name: string;
  icon?: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily?: boolean;
}

export type BottomTabParamList = {
  Restaurant: undefined;
  Settings: undefined;
  Map: undefined;
};

export const TAB_ICON = {
  Restaurant: 'restaurant',
  Settings: 'settings',
  Map: 'map',
};

export type TabValue = 'restaurant' | 'settings' | 'map';
