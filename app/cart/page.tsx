'use client';

import { ChangeEventHandler, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Discount } from '../api/merchant/types';
import { cartSelector } from '../state/cart';
import { checkedDiscountsState, discountsState } from '../state/discounts';
import DiscountItem from '../components/DiscountItem';
import CartItem from '../components/CartItem';
import { getFormattedPrice } from '../util/number';

const Cart = () => {
  const cartList = useRecoilValue(cartSelector({}));
  const discounts = useRecoilValue(discountsState);
  const setCheckList = useSetRecoilState<Discount[]>(checkedDiscountsState);

  const defaultDiscountList = discounts.map((d) => ({ name: d.name, discountRate: d.discountRate }));

  const handleCheckbox: ChangeEventHandler<HTMLInputElement> = (e) => {
    const {
      value,
      checked,
      dataset: { discountrate },
    } = e.currentTarget;
    if (!checked) {
      setCheckList((prev) => prev.filter((p) => p.name !== value));
      return;
    }
    setCheckList((prev) => [...prev, { name: value, discountRate: Number(discountrate) }]);
  };

  useEffect(() => {
    setCheckList(defaultDiscountList);
    console.log({ defaultDiscountList });
  }, []);

  return (
    <main>
      {cartList.items.map((c) => (
        <CartItem key={c.name} item={c} />
      ))}
      {discounts.map((d) => (
        <DiscountItem key={d.id} item={d} handleCheckbox={handleCheckbox} />
      ))}
      <span>총 주문금액</span>
      <span>{getFormattedPrice(cartList.totalPrice)}</span>
    </main>
  );
};

export default Cart;
