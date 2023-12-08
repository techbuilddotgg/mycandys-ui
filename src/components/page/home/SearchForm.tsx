'use client';
import Input from '@/components/ui/Input';
import React from 'react';
import { useQueryParams } from '@/hooks/useQueryParams';

const SearchForm = () => {
  const { updateQueryParams } = useQueryParams();

  return (
    <form className={'flex w-[600px] flex-row gap-2'}>
      <Input placeholder={'What\'s on your taste buds today?'} onChange={(e)=>updateQueryParams({
        search: e.target.value,
      })} />
    </form>
  );
};

export default SearchForm;
