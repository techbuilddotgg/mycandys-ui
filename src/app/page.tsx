'use client';
import SearchForm from '@/components/page/home/SearchForm';
import Marquee from '@/components/ui/Marquee';
import ProductList from '@/components/page/home/ProductList';
import { useProducts } from '@/hooks/useProducts';
import ProductFilter from '@/components/page/home/ProductFilter';

const carouselItems = [
  'Lollipops',
  'Chocolate',
  'Gummy Bears',
  'Bubble Gum',
  'Sour',
  'Soda',
  'Caramel',
  'Chips',
  'Haribor',
  'Snickers',
];

export default function Home() {
  const { data } = useProducts();

  return (
    <>
      <div className={' my-4  flex w-full'}>
        <Marquee items={carouselItems} />
      </div>
      <div className={'my-2 flex w-full flex-row justify-center'}>
        <SearchForm />
      </div>
      <div className={'mt-4 flex w-full flex-row gap-10'}>
        <ProductFilter />
        <ProductList products={data} />
      </div>
    </>
  );
}
