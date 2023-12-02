'use client';
import React, { useEffect } from 'react';
import Stepper from '@/components/ui/Stepper';
import { Route } from '@/constants/routes';
import Button from '@/components/ui/Button';
import { useQueryParams } from '@/hooks/useQueryParams';
import { useRouter } from 'next/navigation';

const Finish = () => {
  const router = useRouter();
  const { updateQueryParams } = useQueryParams();

  useEffect(() => {
    updateQueryParams({ step: 3 });
  }, []);

  return (
    <div className={'flex w-full flex-col items-center'}>
      <div className={'m-auto'}>
        <Stepper
          steps={[
            { name: 'CART', href: Route.CART },
            { name: 'SHIPPING', href: Route.CHECKOUT },
            {
              name: 'FINISH',
              href: Route.FINISH,
            },
          ]}
        />
      </div>
      <div className={'mt-40 flex w-fit flex-col items-center gap-2'}>
        <h1 className={'text-3xl font-bold'}>CONGRATULATIONS!</h1>
        <p>Your order is on your way.</p>
        <Button onClick={() => router.push(Route.HOME)}>BACK TO SHOP</Button>
      </div>
    </div>
  );
};

export default Finish;
