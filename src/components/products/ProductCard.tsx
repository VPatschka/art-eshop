import { FC, useContext } from "react";
import { Product } from "../../types/Product";
import { CartContext } from "../../providers/CartProvider";
import "./ProductCard.scss";

type ProductCardProps = {
  product: Product;
};

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { addProduct: addProductToCart } = useContext(CartContext);

  return (
    <div className="product">
      <div className="product__image" onClick={() => addProductToCart(product)}>
        {product.bestseller && (
          <span className="flag flag--top">Best Seller</span>
        )}
        <img
          src={product.product_images[0].source}
          alt={product.product_images[0].alt}
        />
        <span className="flag flag--add-to-cart">Add to cart</span>
      </div>
      <span className="product__category">{product.category.name}</span>
      <h3>{product.name}</h3>
      <span className="product__price">${product.price.toFixed(2)}</span>
    </div>
  );
};
