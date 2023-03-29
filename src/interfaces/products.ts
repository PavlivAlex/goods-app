export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  year: string;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ICategory {
  label: string;
  key: number;
}
