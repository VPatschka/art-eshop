import { Product } from "../../../types/Product";
import { Filters, PriceRange } from "../../../types/Filters";

const filterProductByCategory = (
  product: Product,
  categoryIds?: number[]
): boolean =>
  !categoryIds ||
  categoryIds.length === 0 ||
  categoryIds.includes(product.category.id);

const filterProductByPrice = (
  product: Product,
  priceRange?: PriceRange
): boolean => {
  if (!priceRange) {
    return true;
  }

  const { from, to } = priceRange;
  if (product.price < from) {
    return false;
  }

  if (to && product.price > to) {
    return false;
  }

  return true;
};

export const filterProducts = (products: Product[], filters: Filters) => {
  const { categoryIds, prices } = filters;

  return products.filter(
    (product) =>
      filterProductByCategory(product, categoryIds) &&
      filterProductByPrice(product, prices)
  );
};
