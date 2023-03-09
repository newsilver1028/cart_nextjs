import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Item } from '../api/merchant/types';
import { cartSelector, CartSelectorAction, cartState } from '../state/cart';
import ControlButton from './ControlButton';
import MerchantItem from './MerchantItem';

interface Props {
  item: Item;
}

const CartItem = ({ item }: Props) => {
  const cart = useRecoilValue(cartState);
  const quantity = cart.items.find((i) => i.name === item.name)?.quantity ?? 0;

  const decreaseSelector = useSetRecoilState(cartSelector({ action: CartSelectorAction.DECREASE, name: item.name }));
  const increaseSelector = useSetRecoilState(cartSelector({ action: CartSelectorAction.INCREASE, name: item.name }));
  const deleteSelector = useSetRecoilState(cartSelector({ action: CartSelectorAction.DELETE, name: item.name }));

  return (
    <MerchantItem item={item} quantity={quantity}>
      <ControlButton
        quantity={quantity}
        handleDecrease={() => decreaseSelector(cart)}
        handleIncrease={() => increaseSelector(cart)}
        handleDelete={() => deleteSelector(cart)}
      />
    </MerchantItem>
  );
};

export default CartItem;
