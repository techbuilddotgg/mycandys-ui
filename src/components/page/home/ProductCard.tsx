import React from 'react';
import Image from 'next/image';
import { Product } from '@/models/product';
import Card from '@/components/ui/Card';
import { formatPrice } from '@/utils/price';
import Button from '@/components/ui/Button';

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
      <Button className={'mt-2 w-full bg-emerald-300'}>ADD TO CART</Button>
    </Card>
  );
};

export default ProductCard;
