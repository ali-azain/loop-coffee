
export interface MenuItem {
  name: string;
  price: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export enum SectionId {
  Hero = 'hero',
  About = 'about',
  Menu = 'menu',
  Location = 'location'
}
