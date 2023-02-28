import { useAtom } from 'jotai';
import { MouseEventHandler } from 'react';
import { cartState } from '../state/cartState';
import Item from './Item';

interface Props {
  items?: ItemsByCategories;
}

const cartAtom = useAtom(cartState);

const Categories = ({ items }: Props) => {
  const [cart, setCart] = cartAtom;

  if (!items) return null;
  const categoryNames = Object.keys(items);

  const onClickItem: MouseEventHandler<HTMLDivElement> = (e) => {
    const { name, price } = e.currentTarget.dataset;
    if (!name || !price) return;
    // alert을 띄워볼까
    if (cart.items.find((i) => i.name === name)) return;
    setCart((prev) => ({
      ...prev,
      items: [...prev.items, { name, price: Number(price), quantity: 1 }],
    }));
  };

  // console.log({ cartAtom });

  return (
    <section>
      {categoryNames.map((name) => {
        return (
          <div key={name}>
            <h2>{name}</h2>
            {items[name].map((item) => (
              <Item key={item.id} item={item} onClickItem={onClickItem} />
            ))}
          </div>
        );
      })}
    </section>
  );
};

export default Categories;
