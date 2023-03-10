import { Button, Checkbox, List } from 'antd';
import { useRecoilValue } from 'recoil';
import { Discount } from '../api/merchant/types';
import { checkedDiscountsState } from '../state/discounts';
import { getPercentPrice } from '../util/number';
import styles from './discountItem.module.scss';

interface Props {
  item: Discount;
  handleCheckbox: any;
}

const DiscountItem = ({ item, handleCheckbox }: Props) => {
  const { id, name, discountRate } = item;

  const checkList = useRecoilValue(checkedDiscountsState);

  return (
    <List.Item>
      <Checkbox
        id={id}
        value={name}
        name='discountCheckbox'
        onChange={(e) => handleCheckbox(e)}
        className={styles.checkbox}
        checked={!!checkList.find((c) => c.name === name)}
        defaultChecked
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
