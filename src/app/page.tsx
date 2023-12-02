'use client';
import SearchForm from '@/components/page/home/SearchForm';
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

      <div className={'mt-4 grid grid-cols-6 gap-20'}>
        <aside
          className={
            'col-span-1 rounded-md border-2 border-black bg-[#bc95d4] p-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
          }
        >
          <Checkbox item={'Gummy'} />
          <Checkbox item={'Chocolate'} />
          <Checkbox item={'Lolipop'} />
        </aside>
        <div className={'col-span-5'}>
          <div className={'flex w-full flex-row flex-wrap gap-4'}>
            <Card heading={'Haribo candy'}>Hood </Card>
            <Card heading={'Chupachups lolipop'}>Hood </Card>
            <Card heading={'Hubabba gum'}>Hood </Card>
          </div>
        </div>
      </div>
    </>
  );
}
