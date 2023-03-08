import { atom, selectorFamily } from 'recoil';
import { checkedDiscountsState } from '../discounts';
import { Cart, CartItem } from './types';

const INIT_VALUE = {
  items: [],
  totalPrice: 0,
};

const cartState = atom<Cart>({
  key: 'cartAtom',
  default: INIT_VALUE,
});

const CartSelectorAction = {
  INCREASE: 'increase',
  DECREASE: 'decrease',
  DELETE: 'delete',
};

const cartSelector = selectorFamily<Cart, { action?: string; name?: string }>({
  key: 'cartSelector/checkedDiscountsState',
  get:
    ({}) =>
    ({ get }) => {
      const cartList = get(cartState).items;
      const discountsList = get(checkedDiscountsState);
      const totalDiscountRate = discountsList.reduce((acc, curr) => (acc += Number(curr.discountRate)), 0);
      const totalMerchantsPrice = cartList.reduce((acc, curr) => (acc += curr.quantity * curr.price), 0);
      const totalPrice =
        totalDiscountRate === 0 ? totalMerchantsPrice : totalMerchantsPrice * (1 - totalDiscountRate * 0.01);
      return { items: cartList, totalPrice: totalPrice <= 0 ? 0 : totalPrice };
    },
  set:
    ({ action, name }) =>
    ({ set }, newValue: any) => {
      const cartItems = newValue.items;
      const setCartValue: Cart = {
        totalPrice: newValue.totalDiscountRate,
        items: cartItems,
      };

      if (action === CartSelectorAction.DELETE) {
        const removedTarget = cartItems.filter((c: CartItem) => c.name !== name);
        setCartValue.items = removedTarget;
        set(cartState, setCartValue);
        return;
      }

      const setItems = cartItems.map((c: CartItem) => {
        const currentItem = { ...c };
        if (currentItem.name !== name) return currentItem;
        if (action === CartSelectorAction.DECREASE) {
          if (currentItem.quantity <= 1) return currentItem;
          currentItem.quantity -= 1;
        } else currentItem.quantity += 1;
        return currentItem;
      });
      setCartValue.items = setItems;
      set(cartState, setCartValue);
    },
});

export { cartState, CartSelectorAction, cartSelector };
