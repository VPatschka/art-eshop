import { Product } from "../../../types/Product";

export const PRODUCTS_PER_PAGE = 6;

export const paginateProducts = (products: Product[], page: number) =>
  products.slice(page * PRODUCTS_PER_PAGE, (page + 1) * PRODUCTS_PER_PAGE);
