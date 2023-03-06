'use client';

import { MouseEventHandler, ReactNode } from 'react';
import { getFormattedPrice } from '@/app/util/number';
import { Item } from '../api/merchant/types';

interface Props {
  item: Item;
  onClickItem: MouseEventHandler<HTMLDivElement>;
  children?: ReactNode;
}

const CartItem = ({ item, onClickItem, children }: Props) => {
  const { name, price } = item;
  const formattedPrice = getFormattedPrice(price);

  return (
    <div data-name={name} data-price={price} onClick={onClickItem}>
      {name}
      <p>{formattedPrice}</p>
      {children}
    </div>
  );
};

export default CartItem;
