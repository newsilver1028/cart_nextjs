'use client';

import { useRecoilState, useRecoilValue } from 'recoil';
import { gql, useQuery } from '@apollo/client';
import { Badge } from 'antd';
import { ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Title from 'antd/es/typography/Title';
import { cartState } from '../state/cart';
import { storeState } from '../state/store';
import { usePathname } from 'next/navigation';
import styles from './nav.module.scss';
import Loading from '../loading';
import { useEffect } from 'react';

const GET_MERCHANT_NAME = gql`
  query GetMerchantName {
    merchantName
    minimumOrderPrice
  }
`;

const Nav = () => {
  const path = usePathname();

  const [storeInfo, setStoreInfo] = useRecoilState(storeState);
  const cartList = useRecoilValue(cartState);

  const { data } = useQuery<{ merchantName: string; minimumOrderPrice: number }>(GET_MERCHANT_NAME);

  useEffect(() => {
    if (data?.merchantName) {
      setStoreInfo({ merchantName: data.merchantName, minimumOrderPrice: data.minimumOrderPrice });
    }
  }, [data?.merchantName]);

  if (!data) return <Loading />;

  return (
    <header className={styles.wrapper}>
      <Title level={2} className={styles.title}>
        {storeInfo.merchantName}
      </Title>
      {path === '/' && (
        <Link href='/cart'>
          <Badge count={cartList.items.length} color='blue'>
            <ShoppingCartOutlined />
          </Badge>
        </Link>
      )}
      {path !== '/' && (
        <Link href='/'>
          <MenuOutlined color='black' />
        </Link>
      )}
    </header>
  );
};

export default Nav;
