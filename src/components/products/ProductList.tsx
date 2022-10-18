import { FC, useCallback, useState } from "react";
import { Product } from "../../types/Product";
import { Filters } from "../../types/Filters";
import { SortBy } from "../../types/SortBy";
import { sortProducts } from "./helper/sortProducts";
import { filterProducts } from "./helper/filterProducts";
import { ProductCard } from "./ProductCard";
import { Pagination } from "../Pagination";
import { paginateProducts, PRODUCTS_PER_PAGE } from "./helper/paginateProducts";
import "./ProductList.scss";

type ProductListProps = {
  products: Product[];
  filters: Filters;
  sortBy: SortBy;
  onAddToCart: (product: Product) => void;
};

export const ProductList: FC<ProductListProps> = (props) => {
  const { products, filters, sortBy, onAddToCart } = props;
  const [page, setPage] = useState(0);

  const filteredProducts = filterProducts(products, filters);
  const sortedProducts = sortProducts(filteredProducts, sortBy);
  const productToShow = paginateProducts(sortedProducts, page);
  const pageCount = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const handlePageChange = useCallback(
    (newPage: number) => {
      if (newPage >= 0 && newPage < pageCount) {
        setPage(newPage);
      }
    },
    [pageCount]
  );

  return (
    <div className="product-list">
      <div className="product-list__products">
        {productToShow.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => onAddToCart(product)}
          />
        ))}
        {productToShow.length === 0 && (
          <span className="danger">No products to show</span>
        )}
      </div>
      <Pagination
        pageCount={pageCount}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
