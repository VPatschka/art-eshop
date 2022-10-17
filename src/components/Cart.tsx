import { FC, useCallback, useState } from "react";
import { Product } from "../types/Product";
import cart from "../assets/cart.svg";
import close from "../assets/close.svg";

type CartProps = {
  productsInCart: Product[];
  onClear: () => void;
};

export const Cart: FC<CartProps> = ({ productsInCart, onClear }) => {
  const productCount = productsInCart.length;
  const [showCart, setShowCart] = useState(productCount > 0);

  const toggleCart = useCallback(() => {
    setShowCart(!showCart);
  }, [showCart]);

  return (
    <div>
      <div className="cart" onClick={toggleCart}>
        <img src={cart} alt="cart" className="cart__image" />
        <span className="cart__badge">{productCount}</span>
      </div>
      {showCart && (
        <div className="cart-box">
          <div className="cart-box__close" onClick={toggleCart}>
            <img src={close} alt="Close cart" />
          </div>
          <div className="cart-box__products">
            {productsInCart.map((product) => (
              <div key={product.id} className="cart-product">
                <div>
                  <span className="cart-product__name">{product.name}</span>
                  <span className="cart-product__price">${product.price}</span>
                </div>
                <img
                  src={product.product_images[0].source}
                  alt={product.product_images[0].alt}
                />
              </div>
            ))}
          </div>
          <hr />
          <button className="btn-secondary" onClick={onClear}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};
