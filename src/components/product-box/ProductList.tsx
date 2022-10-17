import { FC } from "react";
import { Product } from "../../types/Product";
import { Filters } from "../../types/Filters";
import { SortBy } from "../../types/SortBy";

type ProductListProps = {
  products: Product[];
  filters: Filters;
  sortBy: SortBy;
};

export const ProductList: FC<ProductListProps> = (props) => {
  console.log(props);

  return <></>;
};
