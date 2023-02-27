'use client';

import { getMerchantInfo } from '@/service/merchant';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import Categories from './components/Categories';

export default function Home() {
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
      <h1>{data?.merchantName}</h1>
      <Link href='/cart'>cart</Link>
      <Categories items={itemsByCategories} />
    </main>
  );
}
