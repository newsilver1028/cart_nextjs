import { ChangeEventHandler } from 'react';
import { Discount } from '../api/merchant/types';
import { getPercentPrice } from '../util/number';

interface Props {
  item: Discount;
  handleCheckbox: ChangeEventHandler<HTMLInputElement>;
}

const DiscountItem = ({ item, handleCheckbox }: Props) => {
  const { id, name, discountRate } = item;

  return (
    <div>
      <input
        type='checkbox'
        id={id}
        value={name}
        name='discountCheckbox'
        data-discountrate={discountRate}
        onChange={(e) => handleCheckbox(e)}
        defaultChecked
      />
      <label htmlFor={id}>
        {name}
        <p>{getPercentPrice(discountRate)}</p>
      </label>
    </div>
  );
};

export default DiscountItem;
