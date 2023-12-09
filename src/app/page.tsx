import SearchForm from '@/components/page/home/SearchForm';
import Marquee from '@/components/ui/Marquee';
import ProductList from '@/components/page/home/ProductList';
import ProductFilter from '@/components/page/home/ProductFilter';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import {
  PRODUCTS_BY_CATEGORY_QUERY_KEY,
  PRODUCTS_QUERY_KEY,
  SEARCH_PRODUCTS_QUERY_KEY,
} from '@/hooks/useProducts';
import {
  getProducts,
  getProductsByCategory,
  getSearchProducts,
} from '@/api/products';
import { headers } from 'next/headers';

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

export default async function Home() {
  const queryClient = new QueryClient();

  const headerList = headers();
  const url = new URL(headerList.get('x-url') as string);

  const search = url.searchParams.get('search');
  const category = url.searchParams.get('category');

  if (search) {
    await queryClient.prefetchQuery({
      queryKey: [SEARCH_PRODUCTS_QUERY_KEY],
      queryFn: () => getSearchProducts(search),
    });
  }

  if (category) {
    await queryClient.prefetchQuery({
      queryKey: [PRODUCTS_BY_CATEGORY_QUERY_KEY],
      queryFn: () => getProductsByCategory(category),
    });
  }

  if (!search && !category) {
    await queryClient.prefetchQuery({
      queryKey: [PRODUCTS_QUERY_KEY],
      queryFn: getProducts,
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 pb-10">
      <div className={'my-4 flex w-full'}>
        <Marquee items={carouselItems} />
      </div>
      <div className={'mt-4 flex w-full flex-row gap-10'}>
        <ProductFilter />
        <div className={'flex w-full flex-col items-center'}>
          <SearchForm />
          <HydrationBoundary state={dehydrate(queryClient)}>
            <ProductList />
          </HydrationBoundary>
        </div>
      </div>
    </main>
  );
}
