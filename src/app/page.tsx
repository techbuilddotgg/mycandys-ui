'use client';
import Input from '@/componets/Input';

export default function Home() {
  return (
    <main className='flex bg-white min-h-screen flex-col items-center justify-between p-24'>
      <Input  placeholder={'What\'s on your taste buds today?'} setValue={() => '1'}
             value={''} />
    </main>
  );
}
