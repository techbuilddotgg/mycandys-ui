'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { formatPrice } from '@/utils/price';
import Stepper from '@/components/ui/Stepper';
import { useQueryParams } from '@/hooks/useQueryParams';
import { Route } from '@/constants/routes';
import { useRouter } from 'next/navigation';

interface CheckoutFormData {
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
}

const Checkout = () => {
  const router = useRouter();
  const { updateQueryParams } = useQueryParams();

  useEffect(() => {
    updateQueryParams({ step: 2 });
  }, [updateQueryParams]);

  const { register } = useForm<CheckoutFormData>({
    defaultValues: {
      email: '',
      phone: '',
      address: '',
      postalCode: '',
      city: '',
      country: '',
    },
  });

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
      <form className={'mt-8 flex flex-col gap-4'}>
        <Input {...register('email')} placeholder={'Email'} />
        <Input {...register('phone')} placeholder={'Phone'} />
        <Input {...register('country')} placeholder={'Country'} />
        <Input {...register('address')} placeholder={'Address'} />
        <Input {...register('postalCode')} placeholder={'Postal Code'} />
        <Input {...register('city')} placeholder={'City'} />
        <Button type={'button'} onClick={() => router.push(Route.FINISH)}>
          FINISH
        </Button>

        <div className={'flex flex-col'}>
          <h2 className={'text-2xl font-bold'}>Est. Cost</h2>
          <div className={'flex'}>
            <span className={'font-semibold'}>Subtotal</span> <span className={'ml-auto'}>{formatPrice(100)}</span>
          </div>
          <div className={'flex'}>
            <span className={'font-semibold'}>Shipping</span> <span className={'ml-auto'}>{formatPrice(10)}</span>
          </div>
          <div className={'w-full  border-b-2 border-black'} />
          <div className={'flex'}>
            <span className={'font-semibold'}>Total</span> <span className={'ml-auto'}>{formatPrice(110)}</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
