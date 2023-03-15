'use client';

import { MouseEventHandler } from 'react';
import { useRecoilState } from 'recoil';
import { List, message } from 'antd';
import { gql, useQuery } from '@apollo/client';
import { Category } from '../api/merchant/types';
import { cartSelector } from '../state/cart';
import Loading from '../loading';
import MerchantItem from './MerchantItem';
import Title from 'antd/es/typography/Title';
import styles from './categories.module.scss';

const GET_MERCHANT_ITEMS = gql`
  query GetMerchantItems {
    merchantName
    categories {
      categoryId
      categoryName
      items {
        id
        name
        price
      }
    }
  }
`;

const Categories = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [cart, setCart] = useRecoilState(cartSelector({}));

  const { data } = useQuery<{
    merchantName: string;
    categories: Category[];
  }>(GET_MERCHANT_ITEMS);

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

  if (!data) return <Loading />;

  return (
    <section className={styles.wrapper}>
      {contextHolder}
      {data.categories.map((item) => {
        const { categoryId, categoryName, items } = item;

        return (
          <List
            key={categoryId}
            size='large'
            header={<Title level={4}>{categoryName}</Title>}
            dataSource={items}
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
