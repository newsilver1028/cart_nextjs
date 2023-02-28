'use client';

import { getMerchantInfo } from '@/app/service/merchant';
import { useQuery } from '@tanstack/react-query';
import Categories from './components/Categories';
import Nav from './components/Nav';

const Home = () => {
  const { data } = useQuery(['getMerchantInfo'], () => getMerchantInfo());
  const itemsByCategories = data?.items.reduce((acc: any, curr: any) => {
    const { id, categoryName, name, price } = curr;
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push({ id, name, price });
    return acc;
  }, {});

  return (
    <main>
      <Nav merchantName={data?.merchantName} />
      <Categories items={itemsByCategories} />
    </main>
  );
};

export default Home;
