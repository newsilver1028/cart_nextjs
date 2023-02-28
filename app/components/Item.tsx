import { MouseEventHandler, ReactNode } from 'react';
import { getFormattedPrice } from '@/app/util/number';

interface Props {
  item: Item;
  onClickItem: MouseEventHandler<HTMLDivElement>;
  children?: ReactNode;
}

const Item = ({ item, onClickItem, children }: Props) => {
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

export default Item;
