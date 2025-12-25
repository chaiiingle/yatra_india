export enum DestinationName {
  JUNNAR = 'Junnar',
  MAHABALESHWAR = 'Mahabaleshwar',
  OOTY = 'Ooty'
}

export enum SpotCategory {
  // Nature & Scenery
  NATURE = 'Nature',
  SCENIC_POINT = 'Scenic Point',
  WATERFALL = 'Waterfall',
  LAKE = 'Lake',
  CAVE = 'Cave',
  GARDEN = 'Garden',
  BOTANICAL_GARDEN = 'Botanical Garden',
  PARK = 'Park',
  FARM = 'Farm',
  
  // Adventure & Activity
  ADVENTURE = 'Adventure',
  TREK = 'Trek',
  BOATING = 'Boating',
  WILDLIFE = 'Wildlife',
  
  // History & Culture
  HISTORIC = 'Historic',
  FORT = 'Fort',
  CULTURE = 'Culture',
  MUSEUM = 'Museum',
  RELIGIOUS = 'Religious',
  ICONIC = 'Iconic Spot',
  
  // Lifestyle
  SHOPPING = 'Shopping',
  MARKET = 'Market',
  FOOD = 'Food',
  SELFIE_POINT = 'Selfie Point',
  
  OTHER = 'Other'
}

export type SpotIntensity = 'Heavy' | 'Moderate' | 'Light';

export interface TouristSpot {
  id: string;
  name: string;
  description: string;
  destination: DestinationName;
  categories: SpotCategory[]; // Changed to array to support multiple categories
  durationHours: number; // Est time spent there
  imageUrl: string;
  mapQuery: string;
  intensity: SpotIntensity;
}

export interface User {
  id: string;
  name: string;
  email: string;
  savedPlans: SavedPlan[];
  favorites: string[]; // List of Spot IDs
}

export interface SavedPlan {
  id: string;
  name: string;
  destination: DestinationName;
  timeAvailable: string;
  preferences: SpotCategory[];
  itinerary: ItineraryDay[];
  createdAt: string;
  essence: string; // Keep overall essence for the card preview
}

export interface ItineraryDay {
  dayNumber: number;
  spots: TouristSpot[];
  totalTouringHours: number;
  bufferHours: number;
  essence: string; // Day-specific essence
}

export type TimeOption = '6 Hours' | '12 Hours' | '1 Day' | '2 Days' | '3 Days' | '4 Days' | '5 Days';