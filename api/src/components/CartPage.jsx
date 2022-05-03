import React from "react";
import { Cart, cartLocalization } from "react-shopping-cart";
export const CartPage = () => {
  const { getDefaultLocalization } = cartLocalization;
  const localization = {
    GBP: "£",
    USD: "$",
  };

  return (
    <div>
      <Cart
        getLocalization={getDefaultLocalization("cart", "en", localization)}
      />
    </div>
  );
};
