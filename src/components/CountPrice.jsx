import React from "react";



const countSum = () => {
  let bank = [];
  const stateCart = this.props.showCart;
  for (let i = 0; i < stateCart.length; i++) {
    bank.push(stateCart[i].price);
  };
  let totalBank = bank.reduce((first, second) => first + second, 0);
  return totalBank;
}

export default countSum;