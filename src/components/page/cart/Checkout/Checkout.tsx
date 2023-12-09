'use client';
import { useQueryParams } from '@/hooks/useQueryParams';
import React, { useEffect } from 'react';
import Stepper from '@/components/ui/Stepper';
import { Route } from '@/constants/routes';
import CheckoutForm from '@/components/page/cart/Checkout/CheckoutForm';
import CheckoutTotal from '@/components/page/cart/Checkout/CheckoutTotal';

const Checkout = () => {
  const { updateQueryParams } = useQueryParams();

  useEffect(() => {
    updateQueryParams({ step: 2 });
  }, [updateQueryParams]);

  return (
    <div className={'flex flex-col'}>
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
      <CheckoutForm />
      <CheckoutTotal />
    </div>
  );
};

export default Checkout;
