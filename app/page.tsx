'use client';

import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { getMerchantInfo } from './api/merchant';
import { GetMerchantInfoResponse } from './api/merchant/types';
import Categories from './components/Categories';
import Nav from './components/Nav';
import { discountsState } from './state/discounts';

const fetchMerchantInfo = async () => {
  const res = await getMerchantInfo();
  return res;
};

const Home = () => {
  const [merchantInfo, setMerchantInfo] = useState<GetMerchantInfoResponse>();

  const setDiscounts = useSetRecoilState(discountsState);

  useEffect(() => {
    (async () => {
      const res = await fetchMerchantInfo();
      setMerchantInfo(res);
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

  return (
    <main>
      <Nav merchantName={merchantInfo?.merchantName} />
      <Categories items={itemsByCategories} />
    </main>
  );
};

export default Home;
