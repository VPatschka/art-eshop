import { Product } from "../../types/Product";
import { PriceRange } from "../../types/Filters";

export const createPriceRangesFromProducts = (products: Product[]) => {
  const maxPriceRangeThreshhold = 100;
  const priceRangeStep = 50;

  const maxPrice = Math.max(...products.map((product) => product.price));
  const maxFilter = maxPrice - (maxPrice % maxPriceRangeThreshhold);

  console.log({ maxPrice, maxFilter });

  let filterId = 1;
  const filters: PriceRange[] = [{ id: filterId++, from: maxFilter }];

  let currentMaxThreshold = maxFilter;
  do {
    const newFrom = Math.max(currentMaxThreshold - priceRangeStep, 0);

    filters.push({
      id: filterId++,
      from: newFrom,
      to: currentMaxThreshold,
    });

    currentMaxThreshold = newFrom;
  } while (currentMaxThreshold - priceRangeStep >= 0);

  return filters.reverse();
};
