
export interface MenuItem {
  name: string;
  price: string;
  description: string;
  image?: string;
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
