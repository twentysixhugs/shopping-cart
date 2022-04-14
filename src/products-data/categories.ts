import asusMotherboard from './preview-images/asus_motherboard.webp';
import asrockMotherboard from './preview-images/asrock_motherboard.webp';
import i7 from './preview-images/i7.webp';
import ryzen9 from './preview-images/ryzen9.webp';
import asusCard from './preview-images/asus_card.webp';
import gigabyteCard from './preview-images/gigabyte_card.webp';
import msiCard from './preview-images/msi_card.webp';
import xiaomiMonitor from './preview-images/xiaomi_monitor.webp';
import hpMonitor from './preview-images/hp_monitor.webp';
import msiMonitor from './preview-images/msi_monitor.webp';
import huaweiMonitor from './preview-images/huawei_monitor.webp';
import logitechKeyboard from './preview-images/logitech_keyboard.webp';
import redsquareKeyboard from './preview-images/redsquare_keyboard.webp';

export interface CategoryData {
  id: number;
  locationName?: string;
  name: string;
  children?: CategoryData[];
  products?: Product[];
}

export interface Product {
  id: number;
  name: string;
  price: string;
  img: string;
}

export function getCategory(locationName: string): CategoryData {
  return getObject(categories, locationName);
}

function getObject(theObject: any, locationName: string): any {
  let result = null;
  if (theObject instanceof Array) {
    for (let i = 0; i < theObject.length; i++) {
      result = getObject(theObject[i], locationName);
      if (result) {
        break;
      }
    }
  } else {
    for (const prop in theObject) {
      console.log(prop + ': ' + theObject[prop]);
      if (prop === 'products') {
        if (theObject.locationName === locationName) return theObject;
      }
      if (
        theObject[prop] instanceof Object ||
        theObject[prop] instanceof Array
      ) {
        result = getObject(theObject[prop], locationName);
        if (result) {
          break;
        }
      }
    }
  }
  return result;
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
            products: [
              {
                id: 1,
                name: 'ASUS PRIME H510M-K',
                price: '112$',
                img: asusMotherboard,
              },
              {
                id: 2,
                name: 'ASRock B560 PRO4',
                price: '214$',
                img: asrockMotherboard,
              },
            ],
          },
          {
            id: 9,
            name: 'CPU',
            locationName: 'cpu',
            products: [
              {
                id: 3,
                name: 'Intel Core i7-10700KF LGA1200',
                price: '428$',
                img: i7,
              },
              {
                id: 4,
                name: 'AMD Ryzen 9 5950X AM4',
                price: '384$',
                img: ryzen9,
              },
            ],
          },
          {
            id: 10,
            name: 'Videocards',
            locationName: 'videocards',
            products: [
              {
                id: 5,
                name: 'MSI GeForce RTX 3060 GAMING X 12G',
                price: '1020$',
                img: msiCard,
              },
              {
                id: 6,
                name: 'GIGABYTE Radeon RX 6700 XT GAMING OC 12G',
                price: '912$',
                img: gigabyteCard,
              },
              {
                id: 7,
                name: 'ASUS DUAL GeForce GTX 1650 MINI OC 4GB',
                price: '576$',
                img: asusCard,
              },
            ],
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
            products: [
              {
                id: 8,
                name: '34" Xiaomi Mi Curved Gaming, 3440x1440, 144 Hz, VA',
                price: '402$',
                img: xiaomiMonitor,
              },
              {
                id: 9,
                name: '23.6" HP X24c, 1920x1080, 144 Hz, VA',
                price: '274$',
                img: hpMonitor,
              },
              {
                id: 10,
                name: '23.8" MSI Optix G241, 1920x1080, 144 Hz, IPS',
                price: '370$',
                img: msiMonitor,
              },
              {
                id: 11,
                name: '23.8" HUAWEI Display, 1920x1080, 60 Hz, IPS',
                price: '250$',
                img: huaweiMonitor,
              },
            ],
          },
          {
            id: 12,
            name: 'Keyboards',
            locationName: 'keyboards',
            products: [
              {
                id: 12,
                name: 'Logitech K380 Multi-Device Pink',
                price: '42$',
                img: logitechKeyboard,
              },
              {
                id: 13,
                name: 'Red Square Keyrox TKL White',
                price: '37$',
                img: redsquareKeyboard,
              },
            ],
          },
        ],
      },
    ],
  },
];
