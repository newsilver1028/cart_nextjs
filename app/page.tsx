'use client';

import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { getMerchantInfo } from './api/merchant';
import { GetMerchantInfoResponse } from './api/merchant/types';
import { discountsState } from './state/discounts';
import { storeState } from './state/store';
import Categories from './components/Categories';
import Loading from './loading';

const fetchMerchantInfo = async () => {
  const res = await getMerchantInfo();
  return res;
};

const Home = () => {
  const [merchantInfo, setMerchantInfo] = useState<GetMerchantInfoResponse>();
  const setStoreInfo = useSetRecoilState(storeState);
  const setDiscounts = useSetRecoilState(discountsState);

  useEffect(() => {
    (async () => {
      const res = await fetchMerchantInfo();
      setMerchantInfo(res);
      setStoreInfo({ merchantName: res.merchantName, minimumOrderPrice: res.minimumOrderPrice });
      setDiscounts(res.discounts);
    })();
  }, []);

  const itemsByCategories = merchantInfo?.items.reduce((acc: any, curr: any) => {
    const { id, categoryName, name, price } = curr;
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push({ id, name, price });
    return acc;
  }, {});

  // if (merchantInfo) return <Loading />;

  return <Categories items={itemsByCategories} />;
};

export default Home;
