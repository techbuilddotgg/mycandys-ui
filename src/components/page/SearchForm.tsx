'use client';
import Input from '@/components/ui/Input';

export default function SearchForm() {
  return (
    <form>
      <Input placeholder={"What's on your taste buds today?"} setValue={() => '1'} value={''} />
    </form>
  );
}
