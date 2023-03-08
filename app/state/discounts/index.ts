import { atom } from 'recoil';
import { Discount } from '@/app/api/merchant/types';

const INIT_VALUE: Discount[] = [];

const discountsState = atom<Discount[]>({
  key: 'discountsAtom',
  default: INIT_VALUE,
});

const checkedDiscountsState = atom<Discount[]>({
  key: 'checkedDiscountsAtom',
  default: INIT_VALUE,
});

export { discountsState, checkedDiscountsState };
