'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { List, Space } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox/Checkbox';
import { Discount } from '../api/merchant/types';
import { cartSelector } from '../state/cart';
import { storeState } from '../state/store';
import { checkedDiscountsState, discountsState } from '../state/discounts';
import { getFormattedPrice } from '../util/number';
import DiscountItem from '../components/DiscountItem';
import CartItem from '../components/CartItem';
import EmptyCart from '../components/EmtpyCart';
import styles from './page.module.scss';

const Cart = () => {
  const discounts = useRecoilValue(discountsState);
  const storeInfo = useRecoilValue(storeState);
  const cartList = useRecoilValue(cartSelector({}));
  const setCheckList = useSetRecoilState<Discount[]>(checkedDiscountsState);

  const defaultDiscountList = discounts.map((d) => ({ name: d.name, discountRate: d.discountRate }));
  const isEmptyCart = cartList.items.length === 0;

  const handleCheckbox = (e: CheckboxChangeEvent) => {
    const { value, checked } = e.target;

    if (!checked) {
      setCheckList((prev) => prev.filter((p) => p.name !== value));
      return;
    }
    const targetDiscountRate = discounts.find((d) => d.name === value)?.discountRate;
    setCheckList((prev) => [...prev, { name: value, discountRate: Number(targetDiscountRate) }]);
  };

  useEffect(() => {
    if (!storeInfo.merchantName) redirect('/');
    setCheckList(defaultDiscountList);
  }, []);

  return (
    <main>
      {isEmptyCart && <EmptyCart />}
      {!isEmptyCart && (
        <div className={styles.wrapper}>
          <Space direction='vertical' size='large'>
            <List className={styles.list}>
              {cartList.items.map((c) => (
                <CartItem key={c.name} item={c} />
              ))}
            </List>
            <List className={styles.list}>
              {discounts.map((d) => (
                <DiscountItem key={d.id} item={d} handleCheckbox={handleCheckbox} />
              ))}
            </List>
          </Space>
          <footer>
            <span>총 주문금액</span>
            <span>{getFormattedPrice(cartList.totalPrice)}</span>
          </footer>
        </div>
      )}
    </main>
  );
};

export default Cart;
