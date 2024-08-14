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

// ---------------- Restaurant ---------------- //

export interface RestaurantResponse {
  html_attributions: string[];
  next_page_token: string;
  results: Results[];
  status: string;
}

export interface Results {
  business_status: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  icon: string;
  name: string;
  opening_hours?: {
    open_now: boolean;
  };
  photos: {
    height: number;
    html_attributions: string[];
    photo_reference: string;
    width: number;
  }[];
  place_id: string;
  plus_code: {
    compound_code: string;
    global_code: string;
  };
  price_level?: number;
  rating: number;
  reference: string;
  scope: string;
  types: string[];
  user_ratings_total: number;
  vicinity: string;
  permanently_closed?: boolean;
}

export interface TRestaurantResponse {
  htmlAttributions: string[];
  nextPageToken: string;
  results: Restaurant[];
  status: string;
}

export interface Restaurant {
  businessStatus: string;
  geometry: Geometry;
  icon: string;
  name: string;
  openingHours?: OpeningHours;
  photos: Photo[];
  placeId: string;
  plusCode: PlusCode;
  priceLevel?: number;
  rating: number;
  reference: string;
  scope: string;
  types: string[];
  userRatingsTotal: number;
  vicinity: string;
  permanentlyClosed?: boolean;
}

interface Geometry {
  location: Location;
  viewport: Viewport;
}

interface Location {
  lat: number;
  lng: number;
}

interface Viewport {
  northeast: Location;
  southwest: Location;
}

interface OpeningHours {
  openNow: boolean;
}

interface Photo {
  height: number;
  htmlAttributions: string[];
  photoReference: string;
  width: number;
}

interface PlusCode {
  compoundCode: string;
  globalCode: string;
}
