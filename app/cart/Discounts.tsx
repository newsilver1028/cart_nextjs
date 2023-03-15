import { List } from 'antd';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Checkbox, { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Discount } from '../api/merchant/types';
import { checkedDiscountsState } from '../state/discounts';
import DiscountItem from '../components/DiscountItem';
import Loading from '../loading';
import styles from './page.module.scss';

const GET_MERCHANT_DISCOUNTS = gql`
  query GetMerchantItems {
    discounts {
      id
      name
      discountRate
    }
  }
`;

const Discounts = () => {
  const [defaultCheckList, setDefaultCheckList] = useState([{ name: '', discountRate: 0 }]);
  const [checkList, setCheckList] = useRecoilState<Discount[]>(checkedDiscountsState);
  const [checkAll, setCheckAll] = useState(true);

  const { data } = useQuery<{ discounts: Discount[] }>(GET_MERCHANT_DISCOUNTS);

  const handleCheckbox = (e: CheckboxChangeEvent) => {
    const { value, checked } = e.target;

    if (!checked) {
      setCheckList((prev) => prev.filter((p) => p.name !== value));
      return;
    }
    const targetDiscountRate = data?.discounts.find((d) => d.name === value)?.discountRate;
    setCheckList((prev) => [...prev, { name: value, discountRate: Number(targetDiscountRate) }]);
  };

  const handleAllChecked = (e: CheckboxChangeEvent) => {
    setCheckList(e.target.checked ? defaultCheckList : []);
    setCheckAll(e.target.checked);
  };

  useEffect(() => {
    if (data?.discounts) {
      const defaultDiscountList = data?.discounts.map((d) => ({ name: d.name, discountRate: d.discountRate }));
      setDefaultCheckList(defaultDiscountList);
      setCheckList(defaultDiscountList);
      setCheckAll(true);
    }
  }, [data?.discounts]);

  useEffect(() => {
    setCheckAll(checkList.length === defaultCheckList.length);
  }, [checkList]);

  if (!data) return <Loading />;

  return (
    <List className={styles.list}>
      <Checkbox onChange={handleAllChecked} checked={checkAll} className={styles.checkAll}>
        전체선택
      </Checkbox>
      {data.discounts.map((d) => (
        <DiscountItem key={d.id} item={d} handleCheckbox={handleCheckbox} />
      ))}
    </List>
  );
};

export default Discounts;
