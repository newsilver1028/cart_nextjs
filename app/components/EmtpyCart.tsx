import Image from 'next/image';
import EmptyCartImage from '../asset/image/empty-cart.png';
import styles from './emptyCart.module.scss';

const EmptyCart = () => (
  <div className={styles.wrapper}>
    <Image src={EmptyCartImage} alt='your cart is empty' className={styles.img} />
  </div>
);

export default EmptyCart;
