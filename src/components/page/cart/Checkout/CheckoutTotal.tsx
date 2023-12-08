import React from 'react';
import { formatPrice } from '@/utils/price';
import { useCart } from '@/hooks/useCart';

const CheckoutTotal = () => {
  const { data: cart } = useCart('6572327e911ee43f8c3817be');
  const cartPrice = cart?.fullPrice || 0;
  const shippingPrice = 5;
  const totalPrice = cartPrice + shippingPrice;

  return (
    <div className={'mt-4 flex flex-col'}>
      <h2 className={'text-2xl font-bold'}>Est. Cost</h2>
      <div className={'flex'}>
        <span className={'font-semibold'}>Subtotal</span>
        <span className={'ml-auto'}>{formatPrice(cartPrice)}</span>
      </div>
      <div className={'flex'}>
        <span className={'font-semibold'}>Shipping</span>
        <span className={'ml-auto'}>{formatPrice(shippingPrice)}</span>
      </div>
      <div className={'w-full  border-b-2 border-black'} />
      <div className={'flex'}>
        <span className={'font-semibold'}>Total</span>
        <span className={'ml-auto'}>{formatPrice(totalPrice)}</span>
      </div>
    </div>
  );
};

export default CheckoutTotal;
