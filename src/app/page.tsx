'use client';
import SearchForm from '@/components/page/home/SearchForm';
import Marquee from '@/components/ui/Marquee';
import ProductList from '@/components/page/home/ProductList';
import {
  SEARCH_PRODUCTS_QUERY_KEY,
  useProducts,
  useSearchProducts,
} from '@/hooks/useProducts';
import ProductFilter from '@/components/page/home/ProductFilter';
import { useQueryParams } from '@/hooks/useQueryParams';
import { useEffect } from 'react';

const carouselItems = [
  'Lollipops',
  'Chocolate',
  'Gummy Bears',
  'Bubble Gum',
  'Sour',
  'Soda',
  'Caramel',
  'Chips',
  'Haribo',
  'Snickers',
];

export default function Home() {
  const { data } = useProducts();
  const { urlQuery } = useQueryParams();
  const query = urlQuery.search as string;
  const { data: filteredData } = useSearchProducts(query, {
    queryKey: [SEARCH_PRODUCTS_QUERY_KEY, query],
  });

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
        <ProductList products={query ? filteredData : data} />
      </div>
    </>
  );
}
