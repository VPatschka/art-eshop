import { Product } from "../../types/Product";
import { PriceRange } from "../../types/Filters";

// control variables for price range filter generation
const MAX_PRICE_THRESHOLD = 100;
const PRICE_RANGE_STEP = 50;

export const createPriceRangesFromProducts = (products: Product[]) => {
  const maxPrice = Math.max(...products.map((product) => product.price));
  const maxFilter = maxPrice - (maxPrice % MAX_PRICE_THRESHOLD);

  let filterId = 1;
  const filters: PriceRange[] = [{ id: filterId++, from: maxFilter }];

  let currentMaxThreshold = maxFilter;
  do {
    const newFrom = Math.max(currentMaxThreshold - PRICE_RANGE_STEP, 0);

    filters.push({
      id: filterId++,
      from: newFrom,
      to: currentMaxThreshold,
    });

    currentMaxThreshold = newFrom;
  } while (currentMaxThreshold - PRICE_RANGE_STEP >= 0);

  return filters.reverse();
};
