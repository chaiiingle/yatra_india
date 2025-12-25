import { DestinationName, SpotCategory, TouristSpot, TimeOption } from './types';

export const TIME_OPTIONS: TimeOption[] = [
  '6 Hours', '12 Hours', '1 Day', '2 Days', '3 Days', '4 Days', '5 Days'
];

export const CATEGORIES = Object.values(SpotCategory);

// Helper to generate consistent images
const getImg = (id: number) => `https://picsum.photos/seed/${id}/800/600`;

export const DESTINATIONS_DATA = {
  [DestinationName.JUNNAR]: {
    themeColor: 'junnar',
    tagline: 'Land of Shivneri & Ancient Caves',
    description: 'A historic city known as the birthplace of Chhatrapati Shivaji Maharaj, surrounded by the Sahyadri mountains, ancient rock-cut caves, and lush greenery.',
    heroImage: 'https://picsum.photos/seed/junnar_hero/1600/900',
  },
  [DestinationName.MAHABALESHWAR]: {
    themeColor: 'maha',
    tagline: 'Strawberries, Mist & Valleys',
    description: 'A mesmerizing hill station featuring deep evergreen forests, strawberry farms, and ancient temples, offering panoramic views of the Deccan Plateau.',
    heroImage: 'https://picsum.photos/seed/maha_hero/1600/900',
  },
  [DestinationName.OOTY]: {
    themeColor: 'ooty',
    tagline: 'Queen of Hill Stations',
    description: 'Nestled in the Nilgiri hills, Ooty offers a nostalgic colonial charm with its toy train, vast tea estates, and cool, misty weather.',
    heroImage: 'https://picsum.photos/seed/ooty_hero/1600/900',
  }
};

export const SPOTS_DB: TouristSpot[] = [
  // ================= JUNNAR =================
  {
    id: 'j1',
    name: 'Shivneri Fort',
    destination: DestinationName.JUNNAR,
    categories: [SpotCategory.FORT, SpotCategory.HISTORIC],
    durationHours: 3.0,
    description: 'The birthplace of Chhatrapati Shivaji Maharaj. A massive fort with 7 gates and strong fortifications.',
    imageUrl: getImg(101),
    mapQuery: 'Shivneri Fort Junnar',
    intensity: 'Heavy'
  },
  {
    id: 'j2',
    name: 'Lenyadri Caves',
    destination: DestinationName.JUNNAR,
    categories: [SpotCategory.CAVE, SpotCategory.RELIGIOUS, SpotCategory.HISTORIC],
    durationHours: 2.5,
    description: 'A series of 30 rock-cut Buddhist caves, famously housing the Girijatmaj Ganpati temple.',
    imageUrl: getImg(102),
    mapQuery: 'Lenyadri Caves Junnar',
    intensity: 'Moderate'
  },
  {
    id: 'j3',
    name: 'Manikdoh Dam',
    destination: DestinationName.JUNNAR,
    categories: [SpotCategory.LAKE, SpotCategory.NATURE],
    durationHours: 1.5,
    description: 'A serene reservoir surrounded by nature, ideal for a quiet evening.',
    imageUrl: getImg(103),
    mapQuery: 'Manikdoh Dam Junnar',
    intensity: 'Light'
  },
  {
    id: 'j4',
    name: 'Naneghat',
    destination: DestinationName.JUNNAR,
    categories: [SpotCategory.TREK, SpotCategory.HISTORIC, SpotCategory.SCENIC_POINT],
    durationHours: 3.0,
    description: 'Ancient trade route pass featuring inscriptions from the Satavahana era and stunning valley views.',
    imageUrl: getImg(104),
    mapQuery: 'Naneghat Junnar',
    intensity: 'Heavy'
  },
  {
    id: 'j5',
    name: 'Ozar Ganpati Temple',
    destination: DestinationName.JUNNAR,
    categories: [SpotCategory.RELIGIOUS],
    durationHours: 1.5,
    description: 'Vighnahar Ganpati, one of the Ashtavinayaks, situated on the banks of the Kukadi River.',
    imageUrl: getImg(105),
    mapQuery: 'Ozar Ganpati Temple Junnar',
    intensity: 'Moderate'
  },
  {
    id: 'j6',
    name: 'Chhatrapati Shivaji Maharaj Square',
    destination: DestinationName.JUNNAR,
    categories: [SpotCategory.ICONIC],
    durationHours: 0.5,
    description: 'The central square of Junnar featuring a grand statue of the Maratha King.',
    imageUrl: getImg(106),
    mapQuery: 'Chhatrapati Shivaji Maharaj Square Junnar',
    intensity: 'Light'
  },
  {
    id: 'j7',
    name: 'Shiv Shrusti',
    destination: DestinationName.JUNNAR,
    categories: [SpotCategory.CULTURE, SpotCategory.HISTORIC],
    durationHours: 1.5,
    description: 'A cultural theme park depicting the life, administration, and forts of Shivaji Maharaj.',
    imageUrl: getImg(107),
    mapQuery: 'Shiv Srushti Junnar',
    intensity: 'Moderate'
  },
  {
    id: 'j8',
    name: 'Shiv Janmabhoomi',
    destination: DestinationName.JUNNAR,
    categories: [SpotCategory.SELFIE_POINT, SpotCategory.HISTORIC],
    durationHours: 1.0,
    description: 'A designated spot offering the perfect backdrop of Shivneri Fort for photos.',
    imageUrl: getImg(108),
    mapQuery: 'Selfie Point Junnar Shivneri',
    intensity: 'Light'
  },
  {
    id: 'j9',
    name: 'Harin Tekdi',
    destination: DestinationName.JUNNAR,
    categories: [SpotCategory.SCENIC_POINT],
    durationHours: 1.0,
    description: 'A small hillock offering a panoramic view of Junnar city and surrounding windmills.',
    imageUrl: getImg(109),
    mapQuery: 'Harin Tekdi Junnar',
    intensity: 'Moderate'
  },
  {
    id: 'j10',
    name: 'Ganesh Khind',
    destination: DestinationName.JUNNAR,
    categories: [SpotCategory.NATURE, SpotCategory.HISTORIC],
    durationHours: 1.0,
    description: 'A lush green pass with historical significance, great for a short nature walk.',
    imageUrl: getImg(110),
    mapQuery: 'Ganesh Khind Junnar',
    intensity: 'Moderate'
  },
  {
    id: 'j11',
    name: 'Shri Swami Samarth Pratishtthan',
    destination: DestinationName.JUNNAR,
    categories: [SpotCategory.RELIGIOUS],
    durationHours: 0.5,
    description: 'A spiritual center and beautiful Barav (stepwell) located at the chowk.',
    imageUrl: getImg(111),
    mapQuery: 'Swami Samarth Kendra Junnar',
    intensity: 'Light'
  },
  {
    id: 'j12',
    name: 'Pancha Linga Mandir',
    destination: DestinationName.JUNNAR,
    categories: [SpotCategory.RELIGIOUS, SpotCategory.HISTORIC],
    durationHours: 0.5,
    description: 'A historic temple dedicated to Lord Shiva, known for its spiritual ambience.',
    imageUrl: getImg(112),
    mapQuery: 'Pancha Linga Temple Junnar',
    intensity: 'Light'
  },
  {
    id: 'j13',
    name: 'Jivdhan Fort',
    destination: DestinationName.JUNNAR,
    categories: [SpotCategory.TREK, SpotCategory.FORT],
    durationHours: 4.0,
    description: 'A rugged hill fort famously used to guard the Naneghat trade route. Ideal for trekkers.',
    imageUrl: getImg(113),
    mapQuery: 'Jivdhan Fort',
    intensity: 'Heavy'
  },
  {
    id: 'j14',
    name: 'Chavand Fort',
    destination: DestinationName.JUNNAR,
    categories: [SpotCategory.TREK, SpotCategory.FORT],
    durationHours: 2.5,
    description: 'Also known as Prasannagad, features rock-cut steps and cisterns.',
    imageUrl: getImg(114),
    mapQuery: 'Chavand Fort',
    intensity: 'Heavy'
  },
  {
    id: 'j15',
    name: 'Tulja Caves',
    destination: DestinationName.JUNNAR,
    categories: [SpotCategory.CAVE, SpotCategory.HISTORIC],
    durationHours: 1.0,
    description: 'Lesser-known but significant Buddhist caves located near Shivneri.',
    imageUrl: getImg(115),
    mapQuery: 'Tulja Caves Junnar',
    intensity: 'Moderate'
  },
  {
    id: 'j16',
    name: 'Manmodi Caves',
    destination: DestinationName.JUNNAR,
    categories: [SpotCategory.CAVE, SpotCategory.HISTORIC],
    durationHours: 1.5,
    description: 'Ancient rock-cut caves on Manmodi hill, featuring distinct architectural styles.',
    imageUrl: getImg(116),
    mapQuery: 'Manmodi Caves Junnar',
    intensity: 'Moderate'
  },
  {
    id: 'j17',
    name: 'Kukdeshwar Temple',
    destination: DestinationName.JUNNAR,
    categories: [SpotCategory.HISTORIC, SpotCategory.RELIGIOUS],
    durationHours: 1.0,
    description: 'A 12th-century Hemadpanti-style Shiva temple on the river bank.',
    imageUrl: getImg(117),
    mapQuery: 'Kukdeshwar Temple Junnar',
    intensity: 'Moderate'
  },
  {
    id: 'j18',
    name: 'Manikdoh Leopard Rescue Centre',
    destination: DestinationName.JUNNAR,
    categories: [SpotCategory.WILDLIFE],
    durationHours: 1.5,
    description: 'A rehabilitation center for leopards. Entry is restricted/subject to permission.',
    imageUrl: getImg(118),
    mapQuery: 'Manikdoh Leopard Rescue Centre',
    intensity: 'Moderate'
  },
  {
    id: 'j19',
    name: 'Gibson Statue',
    destination: DestinationName.JUNNAR,
    categories: [SpotCategory.HISTORIC],
    durationHours: 0.5,
    description: 'Statue of Dr. Alexander Gibson, a pioneering botanist in British India.',
    imageUrl: getImg(119),
    mapQuery: 'Dr Alexander Gibson Statue Junnar',
    intensity: 'Light'
  },
  {
    id: 'j20',
    name: 'Hadsar Fort',
    destination: DestinationName.JUNNAR,
    categories: [SpotCategory.TREK, SpotCategory.FORT],
    durationHours: 3.5,
    description: 'Unique fort architecture with underground granaries and rock-cut structures.',
    imageUrl: getImg(120),
    mapQuery: 'Hadsar Fort',
    intensity: 'Heavy'
  },


  // ================= MAHABALESHWAR =================
  {
    id: 'm1',
    name: 'Mapro Garden',
    destination: DestinationName.MAHABALESHWAR,
    categories: [SpotCategory.FARM, SpotCategory.FOOD, SpotCategory.SHOPPING],
    durationHours: 2.0,
    description: 'Famous for strawberries, jams, wood-fired pizza, and chocolate factory visits.',
    imageUrl: getImg(201),
    mapQuery: 'Mapro Garden Mahabaleshwar',
    intensity: 'Light'
  },
  {
    id: 'm2',
    name: 'Mahabaleshwar Hill Station',
    destination: DestinationName.MAHABALESHWAR,
    categories: [SpotCategory.ICONIC, SpotCategory.SHOPPING],
    durationHours: 1.0,
    description: 'The main town center area, perfect for a stroll in the cool mist.',
    imageUrl: getImg(202),
    mapQuery: 'Mahabaleshwar Main Market',
    intensity: 'Light'
  },
  {
    id: 'm3',
    name: 'Dhobi Waterfall',
    destination: DestinationName.MAHABALESHWAR,
    categories: [SpotCategory.WATERFALL],
    durationHours: 1.0,
    description: 'A secluded waterfall that flows into the Koyna River, best in monsoon.',
    imageUrl: getImg(203),
    mapQuery: 'Dhobi Waterfall Mahabaleshwar',
    intensity: 'Moderate'
  },
  {
    id: 'm4',
    name: 'Mumbai Sunset Point',
    destination: DestinationName.MAHABALESHWAR,
    categories: [SpotCategory.SCENIC_POINT],
    durationHours: 1.0,
    description: 'Famous for its clear view of the sunset and the distant city lights of Mumbai on clear days.',
    imageUrl: getImg(204),
    mapQuery: 'Mumbai Point Mahabaleshwar',
    intensity: 'Light'
  },
  {
    id: 'm5',
    name: 'Elphinstone Point',
    destination: DestinationName.MAHABALESHWAR,
    categories: [SpotCategory.SCENIC_POINT],
    durationHours: 1.0,
    description: 'One of the highest viewpoints, overlooking the Koyna Valley and Pratapgad.',
    imageUrl: getImg(205),
    mapQuery: 'Elphinstone Point Mahabaleshwar',
    intensity: 'Light'
  },
  {
    id: 'm6',
    name: 'Venna Lake',
    destination: DestinationName.MAHABALESHWAR,
    categories: [SpotCategory.BOATING, SpotCategory.LAKE],
    durationHours: 2.0,
    description: 'A bustling man-made lake offering paddle boating and horse riding.',
    imageUrl: getImg(206),
    mapQuery: 'Venna Lake Mahabaleshwar',
    intensity: 'Moderate'
  },
  {
    id: 'm7',
    name: 'Lodwick Point',
    destination: DestinationName.MAHABALESHWAR,
    categories: [SpotCategory.SCENIC_POINT],
    durationHours: 1.5,
    description: 'Features a memorial pole and offers unobstructed views of the forest.',
    imageUrl: getImg(207),
    mapQuery: 'Lodwick Point Mahabaleshwar',
    intensity: 'Moderate'
  },
  {
    id: 'm8',
    name: 'Rutba Villa',
    destination: DestinationName.MAHABALESHWAR,
    categories: [SpotCategory.SCENIC_POINT],
    durationHours: 0.5,
    description: 'A scenic spot and viewpoint often visited for its serene surroundings.',
    imageUrl: getImg(208),
    mapQuery: 'Rutba Villa Mahabaleshwar',
    intensity: 'Light'
  },
  {
    id: 'm9',
    name: 'Arthur\'s Seat',
    destination: DestinationName.MAHABALESHWAR,
    categories: [SpotCategory.SCENIC_POINT],
    durationHours: 2.0,
    description: 'The Queen of all points. Shows the contrast between the Konkan and the Deccan territories.',
    imageUrl: getImg(209),
    mapQuery: 'Arthur\'s Seat Mahabaleshwar',
    intensity: 'Moderate'
  },
  {
    id: 'm10',
    name: 'Elephant\'s Head Point',
    destination: DestinationName.MAHABALESHWAR,
    categories: [SpotCategory.SCENIC_POINT],
    durationHours: 1.0,
    description: 'The cliffs here naturally form the shape of an elephant\'s head and trunk.',
    imageUrl: getImg(210),
    mapQuery: 'Elephant\'s Head Point Mahabaleshwar',
    intensity: 'Light'
  },
  {
    id: 'm11',
    name: 'Wilson Point',
    destination: DestinationName.MAHABALESHWAR,
    categories: [SpotCategory.SCENIC_POINT],
    durationHours: 1.0,
    description: 'The highest point in Mahabaleshwar (1439m), the only point where both sunrise and sunset can be seen.',
    imageUrl: getImg(211),
    mapQuery: 'Wilson Point Mahabaleshwar',
    intensity: 'Light'
  },
  {
    id: 'm12',
    name: 'Lingmala Waterfall',
    destination: DestinationName.MAHABALESHWAR,
    categories: [SpotCategory.WATERFALL],
    durationHours: 1.5,
    description: 'A majestic waterfall with two levels. The main fall plunges 500 feet.',
    imageUrl: getImg(212),
    mapQuery: 'Lingmala Waterfall',
    intensity: 'Moderate'
  },
  {
    id: 'm13',
    name: 'Chinaman\'s Falls',
    destination: DestinationName.MAHABALESHWAR,
    categories: [SpotCategory.WATERFALL],
    durationHours: 1.0,
    description: 'A beautiful tiered waterfall named after the Chinese gardens formerly located nearby.',
    imageUrl: getImg(213),
    mapQuery: 'Chinaman\'s Falls Mahabaleshwar',
    intensity: 'Moderate'
  },
  {
    id: 'm14',
    name: 'Mahabaleshwar Temple',
    destination: DestinationName.MAHABALESHWAR,
    categories: [SpotCategory.RELIGIOUS, SpotCategory.HISTORIC],
    durationHours: 1.0,
    description: 'An ancient Hemadpanti style Shiva temple, housing a Swayambhu Lingam.',
    imageUrl: getImg(214),
    mapQuery: 'Mahabaleshwar Temple',
    intensity: 'Moderate'
  },
  {
    id: 'm15',
    name: 'Panchgani Table Land',
    destination: DestinationName.MAHABALESHWAR,
    categories: [SpotCategory.ADVENTURE, SpotCategory.SCENIC_POINT],
    durationHours: 2.0,
    description: 'The second largest mountain plateau in Asia. Popular for horse riding and caves.',
    imageUrl: getImg(215),
    mapQuery: 'Table Land Panchgani',
    intensity: 'Moderate'
  },
  {
    id: 'm16',
    name: 'Tapola (Mini Kashmir)',
    destination: DestinationName.MAHABALESHWAR,
    categories: [SpotCategory.LAKE, SpotCategory.ADVENTURE],
    durationHours: 3.0,
    description: 'Situated at the convergence of rivers, famous for Shivsagar Lake and jungle treks.',
    imageUrl: getImg(216),
    mapQuery: 'Tapola Mahabaleshwar',
    intensity: 'Heavy'
  },
  {
    id: 'm17',
    name: 'Pratapgad Fort',
    destination: DestinationName.MAHABALESHWAR,
    categories: [SpotCategory.FORT, SpotCategory.HISTORIC],
    durationHours: 3.5,
    description: 'A historic mountain fort famous for the encounter between Shivaji Maharaj and Afzal Khan.',
    imageUrl: getImg(217),
    mapQuery: 'Pratapgad Fort',
    intensity: 'Heavy'
  },
  {
    id: 'm18',
    name: 'Strawberry Farms',
    destination: DestinationName.MAHABALESHWAR,
    categories: [SpotCategory.FARM],
    durationHours: 1.0,
    description: 'Visit local farms to pick fresh strawberries and buy jams.',
    imageUrl: getImg(218),
    mapQuery: 'Strawberry Farm Mahabaleshwar',
    intensity: 'Light'
  },
  {
    id: 'm19',
    name: 'Town Market',
    destination: DestinationName.MAHABALESHWAR,
    categories: [SpotCategory.MARKET, SpotCategory.SHOPPING],
    durationHours: 1.5,
    description: 'The best place for leather goods, wooden artifacts, and fresh produce.',
    imageUrl: getImg(219),
    mapQuery: 'Mahabaleshwar Market',
    intensity: 'Light'
  },
   {
    id: 'm20',
    name: 'Panchganga Temple',
    destination: DestinationName.MAHABALESHWAR,
    categories: [SpotCategory.RELIGIOUS],
    durationHours: 1.0,
    description: 'Peaceful ancient temple where the union of 5 rivers bless the devotees. ',
    imageUrl: getImg(220),
    mapQuery: 'Panchaganga mandir mahabaleshwar',
    intensity: 'Light'
  },

  // ================= OOTY =================
  {
    id: 'o1',
    name: 'Adam’s Fountain',
    destination: DestinationName.OOTY,
    categories: [SpotCategory.ICONIC, SpotCategory.HISTORIC],
    durationHours: 0.5,
    description: 'A historic fountain at Charring Cross built in 1886 as a memorial.',
    imageUrl: getImg(301),
    mapQuery: 'Adam’s Fountain Ooty',
    intensity: 'Light'
  },
  {
    id: 'o2',
    name: 'Ooty Boat House',
    destination: DestinationName.OOTY,
    categories: [SpotCategory.BOATING],
    durationHours: 2.0,
    description: 'The prime tourist attraction offering rowing, paddle boating, and dashing cars.',
    imageUrl: getImg(302),
    mapQuery: 'Ooty Boat House',
    intensity: 'Moderate'
  },
  {
    id: 'o3',
    name: 'Ooty Viewpoint',
    destination: DestinationName.OOTY,
    categories: [SpotCategory.SCENIC_POINT],
    durationHours: 0.5,
    description: 'A scenic spot offering a bird’s eye view of the town and valley.',
    imageUrl: getImg(303),
    mapQuery: 'Ooty View Point',
    intensity: 'Light'
  },
  {
    id: 'o4',
    name: 'Ketti Valley View Point',
    destination: DestinationName.OOTY,
    categories: [SpotCategory.SCENIC_POINT],
    durationHours: 0.5,
    description: 'View of the largest valley in the Nilgiris, often called the Switzerland of Southern India.',
    imageUrl: getImg(304),
    mapQuery: 'Ketti Valley View Point',
    intensity: 'Light'
  },
  {
    id: 'o5',
    name: 'Benchmark Tourism Center',
    destination: DestinationName.OOTY,
    categories: [SpotCategory.SHOPPING],
    durationHours: 1.0,
    description: 'One-stop shop for Ooty’s famous tea, eucalyptus oil, and chocolates.',
    imageUrl: getImg(305),
    mapQuery: 'Benchmark Tea Ooty',
    intensity: 'Light'
  },
  {
    id: 'o6',
    name: 'Ooty Toy Train',
    destination: DestinationName.OOTY,
    categories: [SpotCategory.ICONIC, SpotCategory.HISTORIC],
    durationHours: 3.0,
    description: 'The Nilgiri Mountain Railway, a UNESCO World Heritage site.',
    imageUrl: getImg(306),
    mapQuery: 'Udhagamandalam Railway Station',
    intensity: 'Moderate'
  },
  {
    id: 'o7',
    name: 'Thread Garden',
    destination: DestinationName.OOTY,
    categories: [SpotCategory.GARDEN],
    durationHours: 1.0,
    description: 'An artificial garden where flowers and plants are intricately made from thread.',
    imageUrl: getImg(307),
    mapQuery: 'Ooty Thread Garden',
    intensity: 'Light'
  },
  {
    id: 'o8',
    name: 'Ooty Hill Station',
    destination: DestinationName.OOTY,
    categories: [SpotCategory.NATURE],
    durationHours: 2.0,
    description: 'Explore the rolling hills, colonial bungalows, and tea estates.',
    imageUrl: getImg(308),
    mapQuery: 'Ooty Hill Station',
    intensity: 'Moderate'
  },
  {
    id: 'o9',
    name: 'Botanical Gardens',
    destination: DestinationName.OOTY,
    categories: [SpotCategory.BOTANICAL_GARDEN, SpotCategory.NATURE],
    durationHours: 2.0,
    description: 'Established in 1848, home to a 20 million year old fossilized tree and rare flora.',
    imageUrl: getImg(309),
    mapQuery: 'Government Botanical Garden Ooty',
    intensity: 'Moderate'
  },
  {
    id: 'o10',
    name: 'Rose Garden',
    destination: DestinationName.OOTY,
    categories: [SpotCategory.GARDEN],
    durationHours: 1.5,
    description: 'The largest rose garden in India with over 20,000 varieties of roses.',
    imageUrl: getImg(310),
    mapQuery: 'Government Rose Garden Ooty',
    intensity: 'Light'
  },
  {
    id: 'o11',
    name: 'Doddabetta Peak',
    destination: DestinationName.OOTY,
    categories: [SpotCategory.TREK, SpotCategory.SCENIC_POINT],
    durationHours: 2.0,
    description: 'The highest peak in the Nilgiri Mountains at 2,637 meters.',
    imageUrl: getImg(311),
    mapQuery: 'Doddabetta Peak Ooty',
    intensity: 'Moderate'
  },
  {
    id: 'o12',
    name: 'Emerald Lake',
    destination: DestinationName.OOTY,
    categories: [SpotCategory.LAKE, SpotCategory.NATURE],
    durationHours: 1.5,
    description: 'A serene lake located in the Silent Valley region, known for blue waters.',
    imageUrl: getImg(312),
    mapQuery: 'Emerald Lake Ooty',
    intensity: 'Light'
  },
  {
    id: 'o13',
    name: 'Pykara Lake & Waterfalls',
    destination: DestinationName.OOTY,
    categories: [SpotCategory.LAKE, SpotCategory.WATERFALL],
    durationHours: 2.5,
    description: 'A sacred lake for the Todas, offering speed boating and scenic waterfalls nearby.',
    imageUrl: getImg(313),
    mapQuery: 'Pykara Lake Ooty',
    intensity: 'Moderate'
  },
  {
    id: 'o14',
    name: 'Avalanche Lake',
    destination: DestinationName.OOTY,
    categories: [SpotCategory.LAKE, SpotCategory.NATURE],
    durationHours: 3.0,
    description: 'A pristine lake formed by a landslide, offering trout fishing and camping.',
    imageUrl: getImg(314),
    mapQuery: 'Avalanche Lake Ooty',
    intensity: 'Heavy'
  },
  {
    id: 'o15',
    name: 'St. Stephen’s Church',
    destination: DestinationName.OOTY,
    categories: [SpotCategory.RELIGIOUS, SpotCategory.HISTORIC],
    durationHours: 0.5,
    description: 'One of the oldest churches in the Nilgiris, with beams taken from Tipu Sultan’s palace.',
    imageUrl: getImg(315),
    mapQuery: 'St. Stephen’s Church Ooty',
    intensity: 'Light'
  },
  {
    id: 'o16',
    name: 'Wax Museum',
    destination: DestinationName.OOTY,
    categories: [SpotCategory.MUSEUM],
    durationHours: 1.0,
    description: 'A museum featuring life-size wax statues of Indian historical figures.',
    imageUrl: getImg(316),
    mapQuery: 'Wax World Museum Ooty',
    intensity: 'Light'
  },
  {
    id: 'o17',
    name: 'Tea Factory & Museum',
    destination: DestinationName.OOTY,
    categories: [SpotCategory.MUSEUM, SpotCategory.SHOPPING],
    durationHours: 1.5,
    description: 'Watch the entire tea production process and sample fresh tea.',
    imageUrl: getImg(317),
    mapQuery: 'Doddabetta Tea Factory',
    intensity: 'Moderate'
  }
];