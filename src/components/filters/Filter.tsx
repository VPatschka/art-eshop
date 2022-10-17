import { FC } from "react";
import { CategoryFilter } from "./CategoryFilter";
import { PriceFilter } from "./PriceFilter";

export const Filter: FC = () => {
  return (
    <div className="filter">
      <CategoryFilter />
      <PriceFilter />
    </div>
  );
};
