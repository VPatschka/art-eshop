import { FC } from "react";
import { Product } from "../types/Product";
import "./FeaturedProduct.scss";

type FeatureProductProps = {
  product: Product;
};

export const FeaturedProduct: FC<FeatureProductProps> = ({ product }) => {
  return (
    <div className="featured-product">
      <h1>{product.name}</h1>
      <div className="featured-product__image">
        <img
          src={product.product_images[0].source}
          alt={product.product_images[0].alt}
        />
        <span>Photo of the day</span>
      </div>
      <div className="featured-product__info">
        <div className="featured-product__info__description">
          <h2>About the {product.name}</h2>
          <h3>{product.category.name}</h3>
          {product.description && <p>{product.description}</p>}
        </div>
        <div>
          <div className="featured-product__info__recommended">
            <h2>People also buy</h2>
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
