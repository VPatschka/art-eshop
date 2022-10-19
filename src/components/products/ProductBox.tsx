import { Product } from "../../types/Product";
import { FC, useCallback, useState } from "react";
import { Filter } from "../filters/Filter";
import { ProductList } from "./ProductList";
import { SortBy } from "../../types/SortBy";
import { Sorting } from "./Sorting";
import { Filters } from "../../types/Filters";
import filter from "../../assets/filter.svg";
import "./ProductBox.scss";
import { FilterModal } from "../FilterModal";

type ProductBoxProps = {
  products: Product[];
};

export const ProductBox: FC<ProductBoxProps> = ({ products }) => {
  const [sortBy, setSortBy] = useState<SortBy>({
    type: "alphabetical",
    ascending: true,
  });
  const [showFilterModal, setShowFilterModal] = useState(false);

  const [filters, setFilters] = useState<Filters>({});

  const handleSortByChange = useCallback((sortBy: SortBy) => {
    setSortBy(sortBy);
  }, []);

  const handleFiltersChange = useCallback((filters: Filters) => {
    setFilters(filters);
  }, []);

  return (
    <div className="product-box">
      <div className="product-box__menu-sort">
        <div className="product-box__menu-sort__menu">
          <span>Photography</span>
          <span>Premium Photos</span>
        </div>
        <Sorting
          className="desktop--flex"
          sortBy={sortBy}
          onChange={handleSortByChange}
        />
        <img
          className="mobile filter-icon"
          src={filter}
          alt="Filter"
          onClick={() => setShowFilterModal(true)}
        />
      </div>
      <div className="product-box__filter-list">
        <Filter
          className="desktop"
          formPrefix="desktop"
          filters={filters}
          onChange={handleFiltersChange}
          products={products}
        />
        <ProductList products={products} filters={filters} sortBy={sortBy} />
      </div>
      {showFilterModal && (
        <FilterModal
          filters={filters}
          sortBy={sortBy}
          products={products}
          onClose={() => setShowFilterModal(false)}
          onSave={(newFilters, newSortBy) => {
            setFilters(newFilters);
            setSortBy(newSortBy);
          }}
        />
      )}
    </div>
  );
};
