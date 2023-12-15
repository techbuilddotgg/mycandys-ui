import SearchForm from '@/components/page/home/SearchForm';
import Marquee from '@/components/ui/Marquee';
import ProductList from '@/components/page/home/ProductList';
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
  'Haribo',
  'Snickers',
];
export default async function Home() {

  return (
      <main className="flex min-h-screen flex-col items-center p-24 pb-10">
        <div className={'my-4 flex w-full'}>
          <Marquee items={carouselItems} />
        </div>
        <div className={'mt-4 flex w-full flex-row gap-10'}>
          <ProductFilter />
          <div className={'flex w-full flex-col items-center'}>
            <SearchForm />
            <ProductList />
          </div>
        </div>
      </main>
  );
}
