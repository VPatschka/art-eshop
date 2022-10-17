import { FC, useCallback, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS, GetProductsType } from "./queries/getProducts";
import { Header } from "./components/header/Header";
import { Product } from "./types/Product";
import { FeaturedProduct } from "./components/FeaturedProduct";

export const MainPage: FC = () => {
  const { loading, error, data } = useQuery<GetProductsType>(GET_PRODUCTS);

  const [productsInCart, setProductsInCart] = useState<Product[]>([]);
  const clearProductsInCart = useCallback(() => {
    setProductsInCart([]);
  }, []);
  const featuredProduct = data?.products.find((product) => product.featured);

  // todo: effect for testing only
  useEffect(() => {
    setProductsInCart(data?.products.slice(0, 3) ?? []);
  }, [data]);

  if (error) {
    console.log(error);
    <div className="danger">Error occured while downloading data</div>;
  }

  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <div>
      <Header productsInCart={productsInCart} onClear={clearProductsInCart} />
      {featuredProduct && <FeaturedProduct product={featuredProduct} />}
    </div>
  );
  <div>
    {/*<Header />*/}
    {/*<FeaturedProduct />*/}
    {/*<ProductList>*/}
    {/*  <Filter />*/}
    {/*  <ProductCards />*/}
    {/*  <Pagination />*/}
    {/*</ProductList>*/}
  </div>;
};
