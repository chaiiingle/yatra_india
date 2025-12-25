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
    heroImage: 'https://sl.bing.net/iYdVbVgFIDQ',
  },
  [DestinationName.MAHABALESHWAR]: {
    themeColor: 'maha',
    tagline: 'Strawberries, Mist & Valleys',
    description: 'A mesmerizing hill station featuring deep evergreen forests, strawberry farms, and ancient temples, offering panoramic views of the Deccan Plateau.',
    heroImage: 'https://live.staticflickr.com/815/39959686265_cf11678f66_b.jpg',
  },
  [DestinationName.OOTY]: {
    themeColor: 'ooty',
    tagline: 'Queen of Hill Stations',
    description: 'Nestled in the Nilgiri hills, Ooty offers a nostalgic colonial charm with its toy train, vast tea estates, and cool, misty weather.',
    heroImage: 'https://seoimgak.mmtcdn.com/blog/sites/default/files/images/ooty_2.jpg',
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
    imageUrl: 'https://i.pinimg.com/originals/34/6b/c0/346bc081a544ff5ef988ac7f1d030d01.jpg',
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
    imageUrl: 'https://tse4.mm.bing.net/th/id/OIP._LePXAOb7CbLCXCrthAUigHaEo?rs=1&pid=ImgDetMain&o=7&rm=3',
    mapQuery: 'Lenyadri caves junnar',
    intensity: 'Moderate'
  },
  {
    id: 'j3',
    name: 'Manikdoh Dam',
    destination: DestinationName.JUNNAR,
    categories: [SpotCategory.LAKE, SpotCategory.NATURE],
    durationHours: 1.5,
    description: 'A serene reservoir surrounded by nature, ideal for a quiet evening.',
    imageUrl: 'https://1.bp.blogspot.com/-652y-vuMnP0/XuY0l5i0DrI/AAAAAAAAClc/3HMyHgmxAFUl4zc4OYcuCJuROPBRmle7ACLcBGAsYHQ/s1600/2018-07-01.jpg',
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
    imageUrl: 'https://1.bp.blogspot.com/-RdB7DM3vGqk/XtoIBqXYjmI/AAAAAAAACPo/jMiJmvp0byoB35em1ZmMv5_fEo822e_UgCK4BGAsYHg/s876/5.jpg',
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
    imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/10/cd/85/2c/temple.jpg',
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
    imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/04/35/a5/00/shivneri-fort.jpg',
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
    imageUrl: 'https://images.hindustantimes.com/img/2022/11/17/1600x900/1251bba8-66a1-11ed-ae2f-eb59304e4c50_1668712031690.jpg',
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
    imageUrl: 'https://media.istockphoto.com/id/1577663818/photo/27-july-2023-junnar-maharashtra-india-shivneri-fort-is-a-17th-century-military-fortification.jpg?s=1024x1024&w=is&k=20&c=ghCd4Zhm9hW7HLMo52bjvr70tpM2N-zpnZcXix46SIY=',
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
    imageUrl: 'https://www.mypunepulse.com/wp-content/uploads/2024/04/Lok-Sabha-2024-Pune-candidates-pledge-to-preserve-Vetal-Tekdi-1024x768.jpeg',
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
    imageUrl: 'https://i.pinimg.com/originals/9b/e3/c6/9be3c61d1b77af883278e78b4e65659b.jpg',
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
    imageUrl: 'https://sl.bing.net/dsRKqOeFEfk',
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
    imageUrl: 'https://sl.bing.net/elQLyJpFyoK',
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
    imageUrl: 'https://sl.bing.net/ObL5KkeUJo',
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
    imageUrl: 'https://alchetron.com/cdn/chavand-maharashtra-c028a049-25e2-454d-b01e-06509186723-resize-750.jpeg',
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
    imageUrl: 'https://preview.redd.it/zehewug9j8291.jpg?width=1080&format=pjpg&auto=webp&s=35e9cc7d2fd2c5bba708f950f6ca44f5ed6af6bf',
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
    imageUrl: 'https://sl.bing.net/PEcT4jSWt2',
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
    imageUrl: 'https://sl.bing.net/goCXk5EC8DQ',
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
    imageUrl: 'https://sl.bing.net/efRhezpfaKG',
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
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwf92FCI_tGGewwu9af3vmH7QPea7vdbxZ2g8UGmGQBNdqYYnpG1OZbi1fxOBlelD-aQE4pUjuEsfHLnVZxRnfHoKa0YEL7E7S-iAAtBYXMcwJdovH7HjfkYFST0aDzfvtQgs58baPz6i4=w426-h240-k-no',
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
    imageUrl: 'https://sl.bing.net/1ok8qtLq0G',
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
    imageUrl: 'https://cdn.shopify.com/s/files/1/0566/5944/3777/files/IMG-4708.jpg?v=1670479457&width=1070',
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
    imageUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnfCJWDBWPfZyQekFTHDJKhjRDXFLMsl2YB-F92rPf3FKjE_Y2XCRf6Fxt9iMvHjl0VJA8C8ixqjZlje0l8wbdFSxZuUA1Lem39k6ckkndprp9NOkop_adupqMIuaq6GFZcL5I5UHttys/s1600/24.jpg',
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
    imageUrl: 'https://hblimg.mmtcdn.com/content/hubble/img/dest_img/mmt/activities/m_mahabaleshwar_Dhobi_Waterfall_1_l_427_640.JPG',
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
    imageUrl: 'https://mahabaleshwartourism.in/images/tourist-places/mumbai-point-sunset-point-mahabaleshwar/mumbai-point-sunset-point-mahabaleshwar-tourism-location-address.jpg',
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
    imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.iUBC3HeNRDkcT6aksnDX8AHaFj?pid=ImgDet&w=60&h=60&c=7&dpr=1.3&rs=1&o=7&rm=3',
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
    imageUrl: 'https://visitplacesindia.com/wp-content/uploads/2024/12/venna-lake-mahabaleshwar.jpg',
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
    imageUrl: 'https://www.trawell.in/admin/images/upload/162483942Mahabaleshwar_Lodwick_Point_Main.jpg',
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
    imageUrl: 'data:image/webp;base64,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',
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
    imageUrl: 'https://www.trawell.in/admin/images/upload/162482708Mahabaleshwar_Arthur_%20Seat_Point_Main.jpg',
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
    imageUrl: 'https://i.ytimg.com/vi/n9rEadUcjoA/maxresdefault.jpg',
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
    imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/11/81/ca/90/mandir.jpg',
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
    imageUrl: 'https://im.whatshot.in/img/2020/Sep/jog-falls-at-shimoga-20181225230640-cropped-1-1601464295.jpg',
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
    imageUrl: 'https://sl.bing.net/g4y6hSs8ue4',
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
    imageUrl: 'https://www.trawell.in/admin/images/upload/162483191Mahabaleshwar_Table_Land_Maiin.jpg',
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
    imageUrl: 'https://www.clubmahindra.com/blog/images/tapola-jungle-resized.jpg',
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
    imageUrl: 'https://tripxl.com/blog/wp-content/uploads/2024/07/Sunset-at-Pratapgad-Fort.jpg',
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
    imageUrl: 'https://img.freepik.com/premium-photo/basket-strawberries-strawberry-farm_899870-10045.jpg?w=2000',
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
    imageUrl: 'https://d3gw4aml0lneeh.cloudfront.net/assets/locations/nMFQptARZOxF.jpg',
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
    imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.s9zAfVO8qsPuFcblssDcfgHaE8?pid=ImgDet&w=474&h=316&rs=1&o=7&rm=3',
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
    imageUrl: 'https://ootytourism.co.in/images/tourist-places/adams-fountain-ooty/adams-fountain-ooty-location-address-ooty-tourism-cr-solomon-ssa.jpg',
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
    imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.7EMAuWD-Pi0FabgHP26InAHaFW?w=1600&h=1157&rs=1&pid=ImgDetMain&o=7&rm=3',
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
    imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.0geHNcil5Q_nVnHtBq6EswHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
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
    imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.FDbrlf_Yz3jSeHTTBEzE2AHaE6?rs=1&pid=ImgDetMain&o=7&rm=3',
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
    imageUrl: 'https://sl.bing.net/iGRWlhak1xk',
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
    imageUrl: 'https://www.clubmahindra.com/blog/media/section_images/toytrainin-5164b90d3509678.jpg',
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
    imageUrl: 'https://c.myholidays.com/blog/2023/5/22110_Explore%20the%20Thread%20Garden.webp',
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
    imageUrl: 'https://wallpaperaccess.com/full/4802539.jpg',
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
    imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.w00HUu17B7l9bzcsuqoSNAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',
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
    imageUrl: 'https://housing.com/news/wp-content/uploads/2023/04/Rose-Garden-Ooty-Fact-guide-f.jpg',
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
    imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.8xSajvRBHBM3ov8cr_uuGQHaEs?rs=1&pid=ImgDetMain&o=7&rm=3',
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
    imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/03/31/7b/52/emerald-lake.jpg',
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
    imageUrl:'https://static.toiimg.com/photo/msid-101730754,width-96,height-65.cms',
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
    imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.WZ6fnyqtQelq_jR7dy-uOQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
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
    imageUrl: 'https://static.wixstatic.com/media/36a61e_a9a5a6cb0d484f7999fedc83b0d7df68~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_90,usm_0.66_1.00_0.01/36a61e_a9a5a6cb0d484f7999fedc83b0d7df68~mv2.jpg',
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
    imageUrl: 'https://ootytourism.co.in/images/places-to-visit-in-ooty/wax-world-museum-ooty-header-ooty-tourism.jpg.jpg',
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
    imageUrl: 'https://static2.tripoto.com/media/filter/tst/img/1372949/Image/1675865885_img_5167.jpeg.webp',
    mapQuery: 'Doddabetta Tea Factory',
    intensity: 'Moderate'
  }
];
