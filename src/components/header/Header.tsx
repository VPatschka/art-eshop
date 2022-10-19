import { FC } from "react";
import { Cart } from "./Cart";
import logo from "../../assets/logo.svg";
import "./Header.scss";

export const Header: FC = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="header__cart">
        <Cart />
      </div>
    </div>
  );
};
