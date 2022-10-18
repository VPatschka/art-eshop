import { FC, useState } from "react";
import { Product } from "../../types/Product";
import { Filters } from "../../types/Filters";
import { SortBy } from "../../types/SortBy";
import { sortProducts } from "./helper/sortProducts";
import { filterProducts } from "./helper/filterProducts";
import { ProductCard } from "./ProductCard";
import "./ProductList.scss";

type ProductListProps = {
  products: Product[];
  filters: Filters;
  sortBy: SortBy;
  onAddToCart: (product: Product) => void;
};

export const PRODUCTS_PER_PAGE = 6;

const paginateProducts = (products: Product[], page: number) =>
  products.slice(page * PRODUCTS_PER_PAGE, (page + 1) * PRODUCTS_PER_PAGE);

export const ProductList: FC<ProductListProps> = (props) => {
  const { products, filters, sortBy, onAddToCart } = props;
  const [page, setPage] = useState(0);

  const filteredProducts = filterProducts(products, filters);
  const sortedProducts = sortProducts(filteredProducts, sortBy);
  const productToShow = paginateProducts(sortedProducts, page);

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
    </div>
  );
};
