import { FC, useCallback, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS, GetProductsType } from "../queries/getProducts";
import { Header } from "../components/header/Header";
import { Product } from "../types/Product";
import { FeaturedProduct } from "../components/FeaturedProduct";
import { ProductBox } from "../components/products/ProductBox";

export const MainPage: FC = () => {
  const { loading, error, data } = useQuery<GetProductsType>(GET_PRODUCTS);

  const [productsInCart, setProductsInCart] = useState<Product[]>([]);
  const clearProductsInCart = useCallback(() => {
    setProductsInCart([]);
  }, []);
  const featuredProduct = data?.products.find((product) => product.featured);
  const otherProducts = data?.products.filter(
    (product) => !featuredProduct || product.id !== featuredProduct.id
  );

  const addToCart = useCallback(
    (product: Product) => {
      setProductsInCart([...productsInCart, product]);
    },
    [productsInCart]
  );

  if (error) {
    console.log(error);
    return <div className="danger">Error occured while downloading data</div>;
  }

  if (loading) {
    return <div className="loading" />;
  }

  return (
    <div>
      <Header productsInCart={productsInCart} onClear={clearProductsInCart} />
      {featuredProduct && (
        <FeaturedProduct product={featuredProduct} onAddToCart={addToCart} />
      )}
      {otherProducts && (
        <ProductBox products={otherProducts} onAddToCart={addToCart} />
      )}
    </div>
  );
};
