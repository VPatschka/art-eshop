import { FC, useCallback, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS, GetProductsType } from "../queries/getProducts";
import { Header } from "../components/header/Header";
import { Product } from "../types/Product";
import { FeaturedProduct } from "../components/FeaturedProduct";
import { ProductBox } from "../components/products/ProductBox";
import { CartProvider } from "../providers/CartProvider";

export const MainPage: FC = () => {
  const { loading, error, data } = useQuery<GetProductsType>(GET_PRODUCTS);

  const [showCart, setShowCart] = useState(false);
  const [productsInCart, setProductsInCart] = useState<Product[]>([]);

  const featuredProduct = data?.products.find((product) => product.featured);
  const otherProducts = data?.products.filter(
    (product) => !featuredProduct || product.id !== featuredProduct.id
  );

  const addToCart = useCallback(
    (product: Product) => {
      if (!productsInCart.includes(product)) {
        setProductsInCart([...productsInCart, product]);
        setShowCart(true);
      }
    },
    [productsInCart]
  );

  if (error) {
    console.error(error);
    return <div className="danger">Error occured while downloading data</div>;
  }

  if (loading) {
    return <div className="loading" />;
  }

  return (
    <div>
      <CartProvider
        value={{
          show: showCart,
          setShow: setShowCart,

          products: productsInCart,
          addProduct: addToCart,
          clearProducts: () => {
            setProductsInCart([]);
            setShowCart(false);
          },
        }}
      >
        <Header />
        {featuredProduct && <FeaturedProduct product={featuredProduct} />}
        {otherProducts && <ProductBox products={otherProducts} />}
      </CartProvider>
    </div>
  );
};
