import { atom } from 'recoil';
import { Cart } from './types';

const INIT_VALUE = {
  items: [],
  totalDiscountRate: 0,
};

const cartState = atom<Cart>({
  key: 'cart',
  default: INIT_VALUE,
});

export { cartState };
