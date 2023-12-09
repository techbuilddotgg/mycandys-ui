'use client';
import React from 'react';
import ProductCard from '@/components/page/home/ProductCard';
import { useFilterProducts } from '@/hooks/useProducts';
import { useQueryParams } from '@/hooks/useQueryParams';
import Loading from '@/components/ui/Loading';

export default function ProductList() {
  const { urlQuery } = useQueryParams();
  const { data, isLoading } = useFilterProducts(
    urlQuery.search as string,
    urlQuery.category as string,
  );

  return (
    <div className={'mt-10 flex w-full flex-row flex-wrap gap-4'}>
      {isLoading ? (
        <div className={'m-auto flex w-full flex-row justify-center'}>
          <Loading />
        </div>
      ) : (
        <>
          {data?.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </>
      )}
    </div>
  );
}
