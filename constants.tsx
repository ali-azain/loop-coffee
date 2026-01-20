
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
      { name: 'Spanish Latte', price: 'Rs. 650' },
      { name: 'Flat White', price: 'Rs. 580' },
      { name: 'Cappuccino', price: 'Rs. 550' },
      { name: 'Cortado', price: 'Rs. 520' },
      { name: 'Americano', price: 'Rs. 450' },
    ],
  },
  {
    title: 'The Loop Specials',
    items: [
      { name: 'Infinity Cold Brew', price: 'Rs. 720' },
      { name: 'Cinematic Mocha', price: 'Rs. 680' },
      { name: 'Red Light Tonic', price: 'Rs. 650' },
    ],
  },
  {
    title: 'Manual Brews',
    items: [
      { name: 'V60 Pour Over', price: 'Rs. 750' },
      { name: 'Aeropress', price: 'Rs. 700' },
      { name: 'French Press', price: 'Rs. 650' },
    ],
  },
  {
    title: 'Food',
    items: [
      { name: 'Butter Croissant', price: 'Rs. 450' },
      { name: 'Almond Pain au Chocolat', price: 'Rs. 550' },
      { name: 'Smoked Chicken Focaccia', price: 'Rs. 850' },
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
