import { SortBy } from "../../../types/SortBy";
import { Product } from "../../../types/Product";

const compareAlphabetically =
  (directionModifier: number) => (first: Product, second: Product) =>
    first.name.localeCompare(second.name) * directionModifier;

const compareByPrice =
  (directionModifier: number) => (first: Product, second: Product) =>
    (first.price - second.price) * directionModifier;

export const sortProducts = (products: Product[], sortBy: SortBy) => {
  const directionModifier = sortBy.ascending ? 1 : -1;
  let comparisonMethod = undefined;
  switch (sortBy.type) {
    case "alphabetical":
      comparisonMethod = compareAlphabetically;
      break;
    case "price":
      comparisonMethod = compareByPrice;
      break;
    default:
      throw Error("Unknonw sort by type");
  }

  return products.sort(comparisonMethod(directionModifier));
};
