'use client';
import Input from '@/components/ui/Input';

export default function SearchForm() {
  return (
    <form className={'flex w-[600px] flex-row'}>
      <Input placeholder={"What's on your taste buds today?"} />
    </form>
  );
}
