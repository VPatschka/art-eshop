import { FC, useCallback } from "react";
import { CategoryFilter } from "./CategoryFilter";
import { PriceFilter } from "./PriceFilter";
import { Filters, PriceRange } from "../../types/Filters";
import { Product } from "../../types/Product";
import { createPriceRangesFromProducts } from "./createPriceRangesFromProducts";
import "./Filter.scss";

type FilterProps = {
  filters: Filters;
  onChange: (filters: Filters) => void;
  products: Product[];
  className?: string;
  formPrefix: string;
};

export const Filter: FC<FilterProps> = ({
  filters,
  onChange,
  products,
  className,
  formPrefix,
}) => {
  const handleCategoryOnChange = useCallback(
    (categoryIds: number[]) => {
      onChange({ ...filters, categoryIds });
    },
    [filters, onChange]
  );

  const handlePriceFilterOnChange = useCallback(
    (priceRange?: PriceRange) => {
      onChange({ ...filters, prices: priceRange });
    },
    [filters, onChange]
  );

  return (
    <div className={"filter " + (className || "")}>
      <CategoryFilter
        selectedCategoryIds={filters.categoryIds ?? []}
        onChange={handleCategoryOnChange}
        formPrefix={formPrefix}
      />
      <PriceFilter
        selectedPriceRange={filters.prices}
        priceRanges={createPriceRangesFromProducts(products)}
        onChange={handlePriceFilterOnChange}
        formPrefix={formPrefix}
      />
    </div>
  );
};
