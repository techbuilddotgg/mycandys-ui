import React from 'react';
import ProductCard from '@/components/page/home/ProductCard';
import { Product } from '@/models/product';

interface ProductListProps {
  products?: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className={'flex w-full flex-row flex-wrap gap-4'}>
      {products?.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
}
