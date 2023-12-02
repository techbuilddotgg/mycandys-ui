import React from 'react';
import Image from 'next/image';
import { Product } from '@/models/product';
import Card from '@/components/ui/Card';
import { formatPrice } from '@/utils/price';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card heading={product.name}>
      <Image src={product.imgUrl} alt={product.name} className={'w-full rounded-md'} width={200} height={200} />
      <div className="mt-1 flex flex-col justify-between gap-1">
        <div className="text-xl font-bold">{formatPrice(product.price)}</div>
      </div>
    </Card>
  );
};

export default ProductCard;
