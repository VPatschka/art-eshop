import { FC, useCallback, useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { CartProduct } from "./CartProduct";
import cart from "../../assets/cart.svg";
import close from "../../assets/close.svg";
import "./Cart.scss";

type CartProps = {
  productsInCart: Product[];
  onClear: () => void;
};

export const Cart: FC<CartProps> = ({ productsInCart, onClear }) => {
  const productCount = productsInCart.length;
  const [showCart, setShowCart] = useState(productCount > 0);
  const [lastProductCount, setLastProductCount] = useState(0);

  const toggleCart = useCallback(() => {
    setShowCart(!showCart);
  }, [showCart]);

  const handleClear = useCallback(() => {
    setShowCart(false);
    setLastProductCount(0);
    onClear();
  }, []);

  useEffect(() => {
    if (productCount !== lastProductCount && productCount !== 0) {
      setShowCart(true);
      setLastProductCount(productCount);
    }
  }, [productCount, lastProductCount]);

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
              <CartProduct key={product.id} product={product} />
            ))}
          </div>
          <hr />
          <button className="btn-secondary" onClick={handleClear}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};
