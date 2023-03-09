'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { Button, List, Space } from 'antd';
import { cartSelector } from '../state/cart';
import { storeState } from '../state/store';
import { getFormattedPrice } from '../util/number';
import CartItem from '../components/CartItem';
import EmptyCart from '../components/EmtpyCart';
import styles from './page.module.scss';
import Discounts from './Discounts';

const Cart = () => {
  const storeInfo = useRecoilValue(storeState);
  const cartList = useRecoilValue(cartSelector({}));

  const isEmptyCart = cartList.items.length === 0;
  const disabled = cartList.totalPrice < storeInfo.minimumOrderPrice;

  useEffect(() => {
    if (!storeInfo.merchantName) redirect('/');
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
            <Discounts />
          </Space>
          <footer>
            <p>총 주문금액</p>
            <Space>
              <span>{getFormattedPrice(cartList.totalDiscountedPrice)}</span>
              <Button disabled={disabled}>배달 주문하기</Button>
            </Space>
          </footer>
        </div>
      )}
    </main>
  );
};

export default Cart;
