import { FC } from "react";
import { Product } from "../../types/Product";
import { Cart } from "./Cart";
import logo from "../../assets/logo.svg";
import "./Header.scss";

type HeaderProps = {
  productsInCart: Product[];
  onClear: () => void;
};

export const Header: FC<HeaderProps> = ({ productsInCart, onClear }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="header__cart">
        <Cart productsInCart={productsInCart} onClear={onClear} />
      </div>
    </div>
  );
};
