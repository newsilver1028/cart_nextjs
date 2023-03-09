import { atom } from 'recoil';
import { Store } from 'antd/es/form/interface';

const INIT_VALUE = {
  minimumOrderPrice: 0,
  merchantName: '',
};

export const storeState = atom<Store>({
  key: 'storeAtom',
  default: INIT_VALUE,
});
