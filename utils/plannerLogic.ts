import { TouristSpot, DestinationName, SpotCategory, TimeOption, ItineraryDay } from '../types';
import { SPOTS_DB } from '../constants';

// Business Logic for Time Mapping
const getTimeConstraints = (timeOption: TimeOption): { totalDays: number; maxDailyTouringHours: number } => {
  switch (timeOption) {
    case '6 Hours':
      return { totalDays: 1, maxDailyTouringHours: 4 };
    case '12 Hours':
      return { totalDays: 1, maxDailyTouringHours: 8 };
    case '1 Day':
      return { totalDays: 1, maxDailyTouringHours: 10 };
    case '2 Days':
      return { totalDays: 2, maxDailyTouringHours: 10 };
    case '3 Days':
      return { totalDays: 3, maxDailyTouringHours: 10 };
    case '4 Days':
      return { totalDays: 4, maxDailyTouringHours: 10 };
    case '5 Days':
      return { totalDays: 5, maxDailyTouringHours: 10 };
    default:
      return { totalDays: 1, maxDailyTouringHours: 8 };
  }
};

export const getTripEssence = (dest: DestinationName, time: TimeOption, prefs: SpotCategory[]): string => {
  const flavor = prefs.length > 0 ? prefs.slice(0, 3).join(', ') : 'heritage and nature';
  return `A ${time} journey through the heart of ${dest}, blending ${flavor} with moments of pause.`;
};

// Generates a sophisticated one-line description for the day based on the spots involved.
export const generateDayEssence = (spots: TouristSpot[]): string => {
  if (spots.length === 0) return "A day for spontaneous discovery and rest.";
  
  // Flatten all categories from all spots in the day
  const categories = new Set(spots.flatMap(s => s.categories));
  
  const hasHistory = categories.has(SpotCategory.FORT) || categories.has(SpotCategory.HISTORIC) || categories.has(SpotCategory.CAVE);
  const hasNature = categories.has(SpotCategory.NATURE) || categories.has(SpotCategory.WATERFALL) || categories.has(SpotCategory.LAKE);
  const hasAdventure = categories.has(SpotCategory.TREK) || categories.has(SpotCategory.ADVENTURE);
  const hasFoodOrShop = categories.has(SpotCategory.FOOD) || categories.has(SpotCategory.SHOPPING) || categories.has(SpotCategory.MARKET);

  if (hasHistory && hasNature) return "A balanced day weaving through ancient stones and lush landscapes.";
  if (hasAdventure && hasNature) return "An adventurous day exploring the wild beauty of the region.";
  if (hasHistory) return "A journey back in time to explore heritage and architecture.";
  if (hasNature && hasFoodOrShop) return "Relaxing nature walks paired with local flavors.";
  if (hasNature) return "Immersing in the serenity of nature and scenic views.";
  return "A delightful mix of local highlights and cultural experiences.";
};

export const generateSmartItinerary = (
  destination: DestinationName,
  timeOption: TimeOption,
  preferences: SpotCategory[]
): ItineraryDay[] => {
  // 1. Get Constraints
  const { totalDays, maxDailyTouringHours } = getTimeConstraints(timeOption);

  // 2. Filter Spots by Destination
  let availableSpots = SPOTS_DB.filter(spot => spot.destination === destination);

  // 3. Score/Sort Spots based on Preferences
  // If preferences are selected, move those to top. Otherwise shuffle lightly.
  if (preferences.length > 0) {
    availableSpots.sort((a, b) => {
      // Check if any of the spot's categories match the preferences
      const aMatch = a.categories.some(cat => preferences.includes(cat)) ? 1 : 0;
      const bMatch = b.categories.some(cat => preferences.includes(cat)) ? 1 : 0;
      return bMatch - aMatch; // Descending, matches first
    });
  } else {
    // Simple shuffle for variety if no prefs
    availableSpots.sort(() => Math.random() - 0.5);
  }

  const itinerary: ItineraryDay[] = [];
  const usedSpotIds = new Set<string>();

  for (let d = 1; d <= totalDays; d++) {
    let currentDayTouring = 0;
    const daySpots: TouristSpot[] = [];
    let heavySpotsCount = 0;

    // Greedily fill the day until max touring hours reached or constraints met
    for (const spot of availableSpots) {
      if (usedSpotIds.has(spot.id)) continue;

      // CONSTRAINT: Max 5 spots per day
      if (daySpots.length >= 5) break;

      // CONSTRAINT: Balance "Heavy" spots (Forts/Treks). Max 1 heavy spot per day to keep it relaxed.
      if (spot.intensity === 'Heavy' && heavySpotsCount >= 1) {
        // Skip this heavy spot for this day, try to find a lighter one
        continue;
      }

      // Check time constraints
      if (currentDayTouring + spot.durationHours <= maxDailyTouringHours) {
        daySpots.push(spot);
        currentDayTouring += spot.durationHours;
        usedSpotIds.add(spot.id);

        if (spot.intensity === 'Heavy') {
          heavySpotsCount++;
        }
      }
    }

    // Calculate Buffer (Assuming a 14 hour active day window: 8am - 10pm)
    // Buffer = ActiveWindow - TouringTime
    const activeWindow = 14; 
    const buffer = Math.max(0, activeWindow - currentDayTouring);
    
    // Generate essence for this specific day
    const dayEssence = generateDayEssence(daySpots);

    itinerary.push({
      dayNumber: d,
      spots: daySpots,
      totalTouringHours: currentDayTouring,
      bufferHours: buffer,
      essence: dayEssence
    });
  }

  return itinerary;
};