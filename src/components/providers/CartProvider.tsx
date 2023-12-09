'use client';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { getCartCookie, removeCartCookie, setCartCookie } from '@/utils/cart';

const DEFAULT_CART_ID = '';

type CartContextType = {
  cartId: string;
  update: (id: string) => void;
  remove: () => void;
};

const CartContext = createContext<CartContextType>({
  cartId: DEFAULT_CART_ID,
  update: () => {},
  remove: () => {},
});

export const CartProvider = ({
  children,
  cartId: _cartId,
}: {
  children: ReactNode;
  cartId?: string;
}) => {
  const [cartId, setCartId] = useState<string>(
    _cartId ? _cartId : DEFAULT_CART_ID,
  );

  useEffect(() => {
    const cookie = getCartCookie();
    if (cookie?._id) {
      setCartId(cookie._id);
    }
  }, []);

  const value: CartContextType = useMemo(() => {
    return {
      cartId,
      update: (id: string) => {
        setCartCookie({ _id: id });
        setCartId(id);
      },
      remove: () => {
        setCartId('');
        removeCartCookie();
      },
    };
  }, [cartId]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};
