import { Product } from "../types/Product";
import { createContext } from "react";

type CartContextType = {
  show: boolean;
  setShow: (show: boolean) => void;

  products: Product[];
  addProduct: (product: Product) => void;
  clearProducts: () => void;
};

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

export const CartProvider = CartContext.Provider;
