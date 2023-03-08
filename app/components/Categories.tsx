'use client';

import { MouseEventHandler } from 'react';
import { useRecoilState } from 'recoil';
import { ItemsByCategories } from '../api/merchant/types';
import { cartSelector } from '../state/cart';
import MerchantItem from './MerchantItem';

interface Props {
  items?: ItemsByCategories;
}

const Categories = ({ items }: Props) => {
  const [cart, setCart] = useRecoilState(cartSelector({}));

  if (!items) return null;
  const categoryNames = Object.keys(items);

  const onClickItem: MouseEventHandler<HTMLDivElement> = (e) => {
    const { name, price } = e.currentTarget.dataset;
    if (!name || !price) return;
    // TODO: alert
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
              <MerchantItem key={item.id} item={item} onClickItem={onClickItem} />
            ))}
          </div>
        );
      })}
    </section>
  );
};

export default Categories;
