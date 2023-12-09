import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import type { OptionsType } from 'cookies-next/lib/types';

const CART_KEY = 'cart';
export const setCartCookie = ({ _id }: { _id: string }) => {
  setCookie(CART_KEY, JSON.stringify({ _id: _id }));
};

export const getCartCookie = (opts?: OptionsType): { _id: string } | null => {
  const cart = JSON.parse(getCookie(CART_KEY, opts) || '{}');
  return cart._id ? { _id: cart._id } : null;
};

export const removeCartCookie = () => {
  deleteCookie(CART_KEY);
};
