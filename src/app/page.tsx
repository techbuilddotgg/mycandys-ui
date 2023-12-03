'use client';
import SearchForm from '@/components/page/home/SearchForm';
import Checkbox from '@/components/ui/Checkbox';
import Marquee from '@/components/ui/Marquee';
import { Product } from '@/models/product';
import ProductCard from '@/components/page/home/ProductCard';

const dummyData: Product[] = [
  {
    id: '1',
    name: 'Haribo candy',
    price: 100,
    imgUrl:
      'https://monpanierlatin.co.uk/cdn/shop/products/Sanstitre_638731a3-9fe9-4d12-9640-b09600bd8a78_9_480x480.png?v=1649837048',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nisl nisl lacinia nisl, vitae aliquam nisl nisl vitae nisl. Nulla euismod, nisl eget ultricies aliquam, nisl nisl lacinia nisl, vitae aliquam nisl nisl vitae nisl. Nulla euismod, nisl eget ultricies aliquam, nisl nisl lacinia nisl, vitae aliquam nisl nisl vitae nisl.',
  },
  {
    id: '12',
    name: 'Haribo candy',
    price: 100,
    imgUrl:
      'https://monpanierlatin.co.uk/cdn/shop/products/Sanstitre_638731a3-9fe9-4d12-9640-b09600bd8a78_9_480x480.png?v=1649837048',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nisl nisl lacinia nisl, vitae aliquam nisl nisl vitae nisl. Nulla euismod, nisl eget ultricies aliquam, nisl nisl lacinia nisl, vitae aliquam nisl nisl vitae nisl. Nulla euismod, nisl eget ultricies aliquam, nisl nisl lacinia nisl, vitae aliquam nisl nisl vitae nisl.',
  },
  {
    id: '112',
    name: 'Haribo candy',
    price: 100,
    imgUrl:
      'https://monpanierlatin.co.uk/cdn/shop/products/Sanstitre_638731a3-9fe9-4d12-9640-b09600bd8a78_9_480x480.png?v=1649837048',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nisl nisl lacinia nisl, vitae aliquam nisl nisl vitae nisl. Nulla euismod, nisl eget ultricies aliquam, nisl nisl lacinia nisl, vitae aliquam nisl nisl vitae nisl. Nulla euismod, nisl eget ultricies aliquam, nisl nisl lacinia nisl, vitae aliquam nisl nisl vitae nisl.',
  },
  {
    id: '122',
    name: 'Haribo candy',
    price: 100,
    imgUrl:
      'https://monpanierlatin.co.uk/cdn/shop/products/Sanstitre_638731a3-9fe9-4d12-9640-b09600bd8a78_9_480x480.png?v=1649837048',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nisl nisl lacinia nisl, vitae aliquam nisl nisl vitae nisl. Nulla euismod, nisl eget ultricies aliquam, nisl nisl lacinia nisl, vitae aliquam nisl nisl vitae nisl. Nulla euismod, nisl eget ultricies aliquam, nisl nisl lacinia nisl, vitae aliquam nisl nisl vitae nisl.',
  },
  {
    id: '13',
    name: 'Haribo candy',
    price: 100,
    imgUrl:
      'https://monpanierlatin.co.uk/cdn/shop/products/Sanstitre_638731a3-9fe9-4d12-9640-b09600bd8a78_9_480x480.png?v=1649837048',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nisl nisl lacinia nisl, vitae aliquam nisl nisl vitae nisl. Nulla euismod, nisl eget ultricies aliquam, nisl nisl lacinia nisl, vitae aliquam nisl nisl vitae nisl. Nulla euismod, nisl eget ultricies aliquam, nisl nisl lacinia nisl, vitae aliquam nisl nisl vitae nisl.',
  },
];

export default function Home() {
  return (
    <>
      <div className={'my-4'}>
        <SearchForm />
      </div>
      <div className={'grid w-full grid-cols-1'}>
        <div className={'col-span-1'}>
          <Marquee
            items={[
              'Gummy',
              'Chocolate',
              'Lolipop',
              'Sour candy',
              'PRIME',
              'Acid',
              'Coke',
              'Pills',
              'Marry Jane',
              'Edibles',
              'GummyBears',
            ]}
          />
        </div>
      </div>
      <div className={'mt-4 grid w-full grid-cols-6 gap-10'}>
        <aside
          className={
            'col-span-1 h-fit rounded-md border-2 border-black bg-primary p-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
          }
        >
          <Checkbox item={'Gummy'} />
          <Checkbox item={'Chocolate'} />
          <Checkbox item={'Lolipop'} />
        </aside>
        <div className={'col-span-5'}>
          <div className={'flex w-full flex-row flex-wrap justify-end gap-4'}>
            {dummyData.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
