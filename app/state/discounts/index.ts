import { atom } from 'recoil';
import { Discount } from '@/app/api/merchant/types';

const INIT_VALUE: Discount[] = [];

const checkedDiscountsState = atom<Discount[]>({
  key: 'checkedDiscountsAtom',
  default: INIT_VALUE,
});

export { checkedDiscountsState };
