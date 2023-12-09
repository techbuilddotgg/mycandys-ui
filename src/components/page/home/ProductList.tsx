'use client';
import React from 'react';
import ProductCard from '@/components/page/home/ProductCard';
import { useFilterProducts } from '@/hooks/useProducts';
import { useQueryParams } from '@/hooks/useQueryParams';

export default function ProductList() {
  const { urlQuery } = useQueryParams();
  const { data } = useFilterProducts(
    urlQuery.search as string,
    urlQuery.category as string,
  );

  return (
    <div className={'flex w-full flex-row flex-wrap gap-4'}>
      {data?.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
}
