'use client';
import { useQueryParams } from '@/hooks/useQueryParams';
import { useEffect } from 'react';
import Stepper from '@/components/ui/Stepper';
import { Route } from '@/constants/routes';
import Cart from '@/components/page/cart/Cart';

export const ShoppingCart = () => {
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
};
