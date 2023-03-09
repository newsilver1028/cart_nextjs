import { Checkbox, List } from 'antd';
import { Discount } from '../api/merchant/types';
import { getPercentPrice } from '../util/number';
import styles from './discountItem.module.scss';

interface Props {
  item: Discount;
  handleCheckbox: any;
}

const DiscountItem = ({ item, handleCheckbox }: Props) => {
  const { id, name, discountRate } = item;

  return (
    <List.Item>
      <Checkbox
        id={id}
        value={name}
        name='discountCheckbox'
        onChange={(e) => handleCheckbox(e)}
        defaultChecked
        className={styles.checkbox}
      >
        <label htmlFor={id}>
          {name}
          <p>{getPercentPrice(discountRate)}</p>
        </label>
      </Checkbox>
    </List.Item>
  );
};

export default DiscountItem;
