import { formatPrice } from '@/utils/price';
import { useCart } from '@/hooks/useCart';
import { useCartContext } from '@/components/providers/CartProvider';
import { SHIPPING_COST } from '@/models/order';

const CheckoutTotal = () => {
  const { cartId } = useCartContext();

  const { data: cart } = useCart(cartId, {
    enabled: !!cartId,
  });

  const cartPrice = cart?.fullPrice || 0;
  const totalPrice = cartPrice + SHIPPING_COST;

  return (
    <div className={'mt-4 flex flex-col'}>
      <h2 className={'text-2xl font-bold'}>Est. Cost</h2>
      <div className={'flex'}>
        <span className={'font-semibold'}>Subtotal</span>
        <span className={'ml-auto'}>{formatPrice(cartPrice)}</span>
      </div>
      <div className={'flex'}>
        <span className={'font-semibold'}>Shipping</span>
        <span className={'ml-auto'}>{formatPrice(SHIPPING_COST)}</span>
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
