import { FC, useContext } from "react";
import { CartContext } from "../providers/CartProvider";
import { Product } from "../types/Product";
import "./FeaturedProduct.scss";

type FeatureProductProps = {
  product: Product;
};

export const FeaturedProduct: FC<FeatureProductProps> = ({ product }) => {
  const { addProduct: addProductToCart } = useContext(CartContext);

  return (
    <div className="featured-product">
      <div className="featured-product__header">
        <h1>{product.name}</h1>
        <button
          onClick={() => addProductToCart(product)}
          className="btn-primary desktop"
        >
          Add to cart
        </button>
      </div>
      <div className="featured-product__image">
        <img
          src={product.product_images[0].source}
          alt={product.product_images[0].alt}
        />
        <span className="flag flag--featured">Photo of the day</span>
      </div>
      <button
        onClick={() => addProductToCart(product)}
        className="btn-primary mobile"
      >
        Add to cart
      </button>
      <div className="featured-product__info">
        <div className="featured-product__info__description">
          <h2>About the {product.name}</h2>
          <h3>{product.category.name}</h3>
          {product.description && <p>{product.description}</p>}
        </div>
        <div>
          <div className="featured-product__info__related">
            <h2>People also buy</h2>
            <div>
              {product.related_products.map(
                ({ product }) =>
                  product.product_images.length > 0 && (
                    <div key={product.id} className="related-product">
                      <img
                        src={product.product_images[0].source}
                        alt={product.product_images[0].alt}
                      />
                    </div>
                  )
              )}
            </div>
          </div>
          {product.product_details && (
            <div className="featured-product__info__details">
              <h2>Details</h2>
              {product.product_details.map((productDetail) => (
                <div key={productDetail.name}>
                  {productDetail.name}: {productDetail.value}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
