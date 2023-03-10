import { List } from 'antd';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import Checkbox, { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Discount } from '../api/merchant/types';
import { checkedDiscountsState, discountsState } from '../state/discounts';
import DiscountItem from '../components/DiscountItem';
import styles from './page.module.scss';

const Discounts = () => {
  const discounts = useRecoilValue(discountsState);
  const [checkList, setCheckList] = useRecoilState<Discount[]>(checkedDiscountsState);
  const [checkAll, setCheckAll] = useState(true);

  const defaultDiscountList = discounts.map((d) => ({ name: d.name, discountRate: d.discountRate }));

  const handleCheckbox = (e: CheckboxChangeEvent) => {
    const { value, checked } = e.target;

    if (!checked) {
      setCheckList((prev) => prev.filter((p) => p.name !== value));
      return;
    }
    const targetDiscountRate = discounts.find((d) => d.name === value)?.discountRate;
    setCheckList((prev) => [...prev, { name: value, discountRate: Number(targetDiscountRate) }]);
  };

  const handleAllChecked = (e: CheckboxChangeEvent) => {
    setCheckList(e.target.checked ? defaultDiscountList : []);
    setCheckAll(e.target.checked);
  };

  useEffect(() => {
    setCheckList(defaultDiscountList);
  }, []);

  useEffect(() => {
    setCheckAll(checkList.length === defaultDiscountList.length);
  }, [checkList]);

  return (
    <List className={styles.list}>
      <Checkbox onChange={handleAllChecked} checked={checkAll} className={styles.checkAll}>
        전체선택
      </Checkbox>
      {discounts.map((d) => (
        <DiscountItem key={d.id} item={d} handleCheckbox={handleCheckbox} />
      ))}
    </List>
  );
};

export default Discounts;
