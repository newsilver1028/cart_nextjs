import Link from 'next/link';

interface Props {
  merchantName?: string;
}

const Nav = ({ merchantName }: Props) => {
  return (
    <header>
      <h1>{merchantName}</h1>
      <Link href='/cart'>cart</Link>
    </header>
  );
};

export default Nav;
