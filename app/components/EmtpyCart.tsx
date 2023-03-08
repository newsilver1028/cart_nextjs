import Image from 'next/image';
import EmptyCartImage from '../asset/image/empty-cart.png';

const EmptyCart = () => <Image src={EmptyCartImage} alt='your cart is empty' />;

export default EmptyCart;
