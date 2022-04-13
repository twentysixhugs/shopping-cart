export interface CategoryData {
  id: number;
  locationName?: string;
  name: string;
  children?: CategoryData[];
}

export const categories: CategoryData[] = [
  {
    id: 1,
    name: 'Computer Electronics',
    children: [
      {
        id: 3,
        name: 'Hardware',
        children: [
          {
            id: 8,
            name: 'Motherboards',
            locationName: 'motherboards',
          },
          {
            id: 9,
            name: 'CPU',
            locationName: 'cpu',
          },
          {
            id: 10,
            name: 'Videocards',
            locationName: 'videocards',
          },
        ],
      },
      {
        id: 4,
        name: 'Devices',
        children: [
          {
            id: 11,
            name: 'Monitors',
            locationName: 'monitors',
          },
          {
            id: 12,
            name: 'Keyboards',
            locationName: 'keyboards',
          },
        ],
      },
    ],
  },
];
