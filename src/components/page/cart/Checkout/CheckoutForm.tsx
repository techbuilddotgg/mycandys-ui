'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Route } from '@/constants/routes';
import { useRouter } from 'next/navigation';
import { useCart } from '@/hooks/useCart';
import { useCreateOrder } from '@/hooks/useOrder';
import { createOrderData } from '@/models/order';
import { User } from '@/models/user';

interface CheckoutFormData {
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
}

const defaultValues: CheckoutFormData = {
  email: '',
  phone: '',
  address: '',
  postalCode: '',
  city: '',
  country: '',
};

const CheckoutForm = () => {
  const { push } = useRouter();
  const { register, handleSubmit } = useForm<CheckoutFormData>({
    defaultValues,
  });
  const { data: cart } = useCart('6572327e911ee43f8c3817be');
  const createOrder = useCreateOrder({
    onSuccess: () => {
      push(Route.FINISH);
    },
  });

  const onSubmit = async (data: CheckoutFormData) => {
    const user: User = {
      ...data,
      id: '',
      name: '',
    };

    const order = createOrderData(
      user,
      cart?.items || [],
      '6572327e911ee43f8c3817be',
    );

    await createOrder.mutateAsync({
      order,
    });
  };

  return (
    <form
      className={'mt-8 flex flex-col gap-4'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input {...register('email')} placeholder={'Email'} />
      <Input {...register('phone')} placeholder={'Phone'} />
      <Input {...register('country')} placeholder={'Country'} />
      <Input {...register('address')} placeholder={'Address'} />
      <Input {...register('postalCode')} placeholder={'Postal Code'} />
      <Input {...register('city')} placeholder={'City'} />
      <Button>FINISH</Button>
    </form>
  );
};

export default CheckoutForm;
