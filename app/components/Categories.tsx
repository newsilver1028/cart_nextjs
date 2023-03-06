'use client';

import { MouseEventHandler } from 'react';
import { useRecoilState } from 'recoil';
import { ItemsByCategories } from '../api/merchant/types';
import { cartState } from '../state/cart';
import CartItem from './CartItem';

interface Props {
  items?: ItemsByCategories;
}

const Categories = ({ items }: Props) => {
  const [cart, setCart] = useRecoilState(cartState);

  if (!items) return null;
  const categoryNames = Object.keys(items);

  const onClickItem: MouseEventHandler<HTMLDivElement> = (e) => {
    const { name, price } = e.currentTarget.dataset;
    if (!name || !price) return;
    // alert
    if (cart.items.find((i) => i.name === name)) return;
    setCart((prev) => ({
      ...prev,
      items: [...prev.items, { name, price: Number(price), quantity: 1 }],
    }));
  };

  return (
    <section>
      {categoryNames.map((name) => {
        return (
          <div key={name}>
            <h2>{name}</h2>
            {items[name].map((item) => (
              <CartItem key={item.id} item={item} onClickItem={onClickItem} />
            ))}
          </div>
        );
      })}
    </section>
  );
};

export default Categories;
