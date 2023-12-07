import { useAddToCart } from '@/hooks/useCart';

('client');
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
  const { mutateAsync } = useAddToCart();

  return (
    <Card heading={product.name}>
      <Image
        src={product.imgUrl}
        alt={product.name}
        className={'h-[200px] w-full object-scale-down'}
        width={300}
        height={300}
      />
      <div className="mt-1 flex flex-col justify-between gap-1">
        <div className="text-xl font-bold">
          {formatPrice(product.temporaryPrice)}
        </div>
      </div>
      <Button
        onClick={async () =>
          mutateAsync({
            productId: product._id,
            cartId: '6572327e911ee43f8c3817be',
          })
        }
        className={'mt-2 w-full bg-emerald-300'}
      >
        ADD TO CART
      </Button>
    </Card>
  );
};

export default ProductCard;
