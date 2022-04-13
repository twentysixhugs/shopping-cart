export interface CategoryData {
  locationName: number;
  name: string;
  children?: CategoryData[];
}

export const categories: CategoryData[] = [
  {
    locationName: 1,
    name: 'Electronics',
    children: [
      {
        locationName: 3,
        name: 'Accessories',
        children: [
          {
            locationName: 8,
            name: 'Audio Accessories',
          },
          {
            locationName: 9,
            name: 'Camera Accessories',
          },
          {
            locationName: 10,
            name: 'Cell Phone Accessories',
          },
        ],
      },
      {
        locationName: 4,
        name: 'Computers',
        children: [
          {
            locationName: 11,
            name: 'Personal Computers',
            children: [
              {
                locationName: 14,
                name: 'Mac',
              },
              {
                locationName: 15,
                name: 'Linux',
              },
              {
                locationName: 16,
                name: 'Windows',
              },
            ],
          },
          {
            locationName: 12,
            name: 'Tablets',
          },
          {
            locationName: 13,
            name: 'Monitors',
          },
        ],
      },
    ],
  },
  {
    locationName: 2,
    name: 'Fashion',
    children: [
      {
        locationName: 5,
        name: 'Clothing',
      },
      {
        locationName: 6,
        name: 'Shoes',
      },
      {
        locationName: 7,
        name: 'Jewelry',
      },
    ],
  },
];
