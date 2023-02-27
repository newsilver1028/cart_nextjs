import { getFormattedPrice } from '@/util/number';

interface Props {
  item: Item;
}

export default function Item({ item }: Props) {
  const { name, price } = item;
  const formattedPrice = getFormattedPrice(price);
  return (
    <div>
      {name}
      <p>{formattedPrice}</p>
    </div>
  );
}
