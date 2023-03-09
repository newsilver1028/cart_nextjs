'use client';

import { MouseEventHandler } from 'react';
import { useRecoilState } from 'recoil';
import { List, message } from 'antd';
import { ItemsByCategories } from '../api/merchant/types';
import { cartSelector } from '../state/cart';
import Loading from '../loading';
import MerchantItem from './MerchantItem';
import Title from 'antd/es/typography/Title';
import styles from './categories.module.scss';

interface Props {
  items?: ItemsByCategories;
}

const Categories = ({ items }: Props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [cart, setCart] = useRecoilState(cartSelector({}));

  const onClickItem: MouseEventHandler<HTMLDivElement> = (e) => {
    const { name, price } = e.currentTarget.dataset;
    if (!name || !price) return;
    if (cart.items.find((i) => i.name === name)) {
      messageApi.info('이미 장바구니에 담겨있는 상품입니다.');
      return;
    }
    setCart((prev) => ({
      ...prev,
      items: [...prev.items, { name, price: Number(price), quantity: 1 }],
    }));
  };

  if (!items) return <Loading />;
  const categoryNames = Object.keys(items);

  return (
    <section className={styles.wrapper}>
      {contextHolder}
      {categoryNames.map((name) => {
        return (
          <List
            key={name}
            size='large'
            header={<Title level={4}>{name}</Title>}
            dataSource={items[name]}
            renderItem={(item) => <MerchantItem key={item.id} item={item} onClickItem={onClickItem} />}
            style={{ backgroundColor: 'white' }}
            className={styles.list}
          />
        );
      })}
    </section>
  );
};

export default Categories;
