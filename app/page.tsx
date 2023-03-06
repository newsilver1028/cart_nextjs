import Categories from './components/Categories';
import Nav from './components/Nav';
import { SERVER_URL } from './constant';

const fetchMerchantInfo = async () => {
  const res = await fetch(SERVER_URL);
  return res.json();
};

const Home = async () => {
  const merchantInfo = await fetchMerchantInfo();

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
