import { Category } from "./Category";

export type Product = {
  id: number;
  category: Category;
  name: string;
  description: string;
  price: number;
  bestseller: boolean;
  featured: boolean;
  product_images: ProductImage[];
  product_details: ProductDetail[];
};

export type ProductImage = {
  id: number;
  source: string;
  alt: string;
};

export type ProductDetail = {
  name: string;
  value: string;
};
