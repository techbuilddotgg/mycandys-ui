'use client';
import { Route } from '@/constants/routes';
import Stepper from '@/components/ui/Stepper';
import { useQueryParams } from '@/hooks/useQueryParams';
import { useEffect } from 'react';
import Cart from '@/components/page/cart/Cart';

export default function ShoppingCart() {
  const { updateQueryParams } = useQueryParams();

  useEffect(() => {
    updateQueryParams({ step: 1 });
  }, [updateQueryParams]);

  return (
    <div className={'flex w-full flex-col'}>
      <div className={'m-auto'}>
        <Stepper
          steps={[
            { name: 'CART', href: Route.CART },
            { name: 'SHIPPING', href: Route.CHECKOUT },
            {
              name: 'FINISH',
              href: '/',
            },
          ]}
        />
      </div>
      <Cart />
    </div>
  );
}
