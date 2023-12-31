'use client';
import { CART_QUERY_KEY, useAddToCart } from '@/hooks/useCart';
import React from 'react';
import Image from 'next/image';
import { Product } from '@/models/product';
import Card from '@/components/ui/Card';
import { formatPrice } from '@/utils/price';
import Button from '@/components/ui/Button';
import { classnames } from '@/utils/classnames';
import { useCartContext } from '@/components/providers/CartProvider';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { cartId, update } = useCartContext();
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useAddToCart({
    onSuccess: async (cart) => {
      await queryClient.invalidateQueries({
        queryKey: [CART_QUERY_KEY, cart._id],
      });
      update(cart._id);
    },
  });

  const isDiscounted = product.temporaryPrice > 0;

  const addToCart = () => {
    toast.promise(
      mutateAsync({
        productId: product._id,
        cartId,
      }),
      {
        loading: 'Adding to cart...',
        success: 'Added to cart!',
        error: 'Error adding to cart!',
      },
    );
  };

  return (
    <Card heading={product.name}>
      <Image
        src={product.imgUrl}
        alt={product.name}
        className={'h-[200px] w-full object-scale-down'}
        width={300}
        height={300}
      />
      <div className="my-2 mt-1 flex flex-row gap-2">
        <div
          className={classnames(
            'text-xl font-bold',
            isDiscounted ? 'line-through decoration-red-500' : '',
          )}
        >
          {formatPrice(product.originalPrice)}
        </div>
        {isDiscounted && (
          <div className={'text-xl font-bold'}>
            {formatPrice(product.temporaryPrice)}
          </div>
        )}
      </div>
      <Button disabled={isPending} onClick={addToCart} className={'mt-2 w-full bg-emerald-300 disabled:opacity-50'}>
        ADD TO CART
      </Button>
    </Card>
  );
};

export default ProductCard;
