import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { Badge } from 'antd';
import { ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';
import { cartState } from '../state/cart';
import { storeState } from '../state/store';
import { usePathname } from 'next/navigation';
import styles from './nav.module.scss';

const Nav = () => {
  const path = usePathname();

  const storeInfo = useRecoilValue(storeState);
  const cartList = useRecoilValue(cartState);

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
