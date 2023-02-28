import { atom } from 'jotai';

const INIT_VALUE = {
  items: [],
  totalDiscountRate: 0,
};

const cartState = atom<Cart>(INIT_VALUE);

export { cartState };
