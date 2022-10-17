import { FC } from "react";
import { Product } from "../../types/Product";
import "./CartProduct.scss";

type CartProductProps = {
  product: Product;
};

export const CartProduct: FC<CartProductProps> = ({ product }) => {
  return (
    <div key={product.id} className="cart-product">
      <div>
        <span className="cart-product__name">{product.name}</span>
        <span className="cart-product__price">${product.price}</span>
      </div>
      {product.product_images && (
        <img
          src={product.product_images[0].source}
          alt={product.product_images[0].alt}
        />
      )}
    </div>
  );
};
