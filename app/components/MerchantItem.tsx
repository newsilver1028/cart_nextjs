'use client';

import { MouseEventHandler, ReactNode } from 'react';
import { getFormattedPrice } from '@/app/util/number';
import { Item } from '../api/merchant/types';
import styles from './merchantItem.module.scss';
import { List } from 'antd';
import Title from 'antd/es/typography/Title';

interface Props {
  item: Item;
  quantity?: number;
  onClickItem?: MouseEventHandler<HTMLDivElement>;
  children?: ReactNode;
}

const MerchantItem = ({ item, quantity, onClickItem, children }: Props) => {
  const { name, price } = item;
  const formattedPrice = quantity ? getFormattedPrice(price * quantity) : getFormattedPrice(price);

  return (
    <List.Item style={{ padding: 0, cursor: 'pointer' }}>
      <div data-name={name} data-price={price} onClick={onClickItem} className={styles.wrapper}>
        <div className={styles.text}>
          <Title level={5}>{name}</Title>
          <p className={styles.price}>{formattedPrice}</p>
        </div>
        {children}
      </div>
    </List.Item>
  );
};

export default MerchantItem;
