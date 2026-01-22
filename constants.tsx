
import { MenuCategory } from './types';

export const COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  red: '#FF0000',
};

export const MENU_DATA: MenuCategory[] = [
  {
    title: 'Espresso Bar',
    items: [
      {
        name: 'Spanish Latte',
        price: 'Rs. 650',
        description: 'A harmonious blend of sweet condensed milk and robust espresso, finished with textured milk.',
        image: 'https://images.unsplash.com/photo-1570968992193-96ab7d18e8df?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: 'Flat White',
        price: 'Rs. 580',
        description: 'Double ristretto poured over silky micro-foam. The purist’s choice.',
        image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: 'Cappuccino',
        price: 'Rs. 550',
        description: 'Classical composition of thirds. Espresso, steamed milk, and heavy foam.',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: 'Cortado',
        price: 'Rs. 520',
        description: 'Equal parts espresso and warm milk to reduce acidity. Small, potent, smooth.',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: 'Americano',
        price: 'Rs. 450',
        description: 'Espresso diluted with hot water. A clean, long black coffee.',
      },
    ],
  },
  {
    title: 'The Loop Specials',
    items: [
      {
        name: 'Infinity Cold Brew',
        price: 'Rs. 720',
        description: 'Steeped for 24 hours. Notes of dark chocolate and cherry. Served over clear ice.',
        image: 'https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: 'Cinematic Mocha',
        price: 'Rs. 680',
        description: 'Dark Belgian ganache melted into espresso. A noir experience.',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: 'Red Light Tonic',
        price: 'Rs. 650',
        description: 'Double shot espresso topped with premium tonic and a twist of blood orange.',
      },
    ],
  },
  {
    title: 'Manual Brews',
    items: [
      {
        name: 'V60 Pour Over',
        price: 'Rs. 750',
        description: 'Hand-poured filter coffee highlighting delicate floral and fruity notes.',
      },
      {
        name: 'Aeropress',
        price: 'Rs. 700',
        description: 'Full immersion brewing. Rich body with a clean finish.',
      },
    ],
  },
  {
    title: 'Food',
    items: [
      {
        name: 'Butter Croissant',
        price: 'Rs. 450',
        description: 'Layers of French butter and dough, baked to golden perfection.',
      },
      {
        name: 'Almond Pain au Chocolat',
        price: 'Rs. 550',
        description: 'Classic chocolate croissant topped with almond frangipane.',
      },
      {
        name: 'Smoked Chicken Focaccia',
        price: 'Rs. 850',
        description: 'House-made rosemary focaccia sandwich with artisan smoked chicken.',
      },
    ],
  },
];

export const INFINITY_SVG = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-full h-full"
  >
    <path d="M18.178 8C20.284 8 22 9.716 22 12s-1.716 4-3.822 4c-1.398 0-2.67-.775-3.896-1.928C13.064 12.928 10.936 11.072 9.718 9.928 8.492 8.775 7.22 8 5.822 8 3.716 8 2 9.716 2 12s1.716 4 3.822 4c1.398 0 2.67-.775 3.896-1.928.163-.153.33-.312.502-.476l1.56-1.592c.172-.164.339-.323.502-.476 1.226-1.153 2.498-1.928 3.896-1.928z" />
  </svg>
);
