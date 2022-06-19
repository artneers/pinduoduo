export interface TabItem {
  title: string;
  icon: string;
  link: string;
  selectedIcon: string;
}

export interface Ads {
  imageUrl: string;
  link: string;
}

export interface Product {
  id: number;
  title: string;
  imageUrl: string;
  tags: string[];
  price: number;
  priceDesc: string;
  buyerAvatars: string[];
}
