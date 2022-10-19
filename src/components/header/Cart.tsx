import { FC, useContext } from "react";
import { CartContext } from "../../providers/CartProvider";
import { CartProduct } from "./CartProduct";
import cart from "../../assets/cart.svg";
import close from "../../assets/close.svg";
import "./Cart.scss";

export const Cart: FC = () => {
  const cartContext = useContext(CartContext);
  const { show, setShow, products, clearProducts } = cartContext;

  const productCount = products.length;

  return (
    <div>
      <div className="cart" onClick={() => setShow(!show)}>
        <img src={cart} alt="cart" className="cart__image" />
        <span className="cart__badge">{productCount}</span>
      </div>
      {show && (
        <div className="cart-box">
          <div className="close" onClick={() => setShow(!show)}>
            <img src={close} alt="Close cart" />
          </div>
          <div className="cart-box__products">
            {products.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </div>
          <hr />
          <button className="btn-secondary" onClick={clearProducts}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};
