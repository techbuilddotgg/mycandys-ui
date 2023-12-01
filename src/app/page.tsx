'use client';
import SearchForm from '@/components/page/SearchForm';
import Card from '@/components/ui/Card';
import Checkbox from '@/components/ui/Checkbox';
import Marquee from '@/components/ui/Marquee';

export default function Home() {
  return (
    <>
      <div className={'my-4'}>
        <SearchForm />
      </div>
      <Marquee
        items={[
          'Gummy',
          'Chocolate',
          'Lolipop',
          'Sour candy',
          'PRIME',
          'Gummy',
          'Chocolate',
          'Lolipop',
          'Sour candy',
          'PRIME',
        ]}
      />

      <div className={'grid grid-cols-6 gap-20 mt-4'}>
        <aside
          className={
            'col-span-1 p-2 rounded-md border-2 border-black bg-[#bc95d4] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
          }
        >
          <Checkbox item={'Gummy'} />
          <Checkbox item={'Chocolate'} />
          <Checkbox item={'Lolipop'} />
        </aside>
        <div className={'col-span-5'}>
          <div className={'flex flex-row flex-wrap w-full gap-4'}>
            <Card heading={'Haribo candy'} paragraph={'very good'} />
            <Card heading={'Chupachups lolipop'} paragraph={'very good'} />
            <Card heading={'Hubabba gum'} paragraph={'very good'} />
          </div>
        </div>
      </div>
    </>
  );
}
