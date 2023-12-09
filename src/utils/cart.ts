import { deleteCookie, getCookie, setCookie } from 'cookies-next';

const CART_KEY = 'cart';
export const setCartCookie = ({ _id }: { _id: string }) => {
  setCookie(CART_KEY, JSON.stringify({ _id: _id }));
};

export const getCartCookie = (): { _id: string } | null => {
  const cart = JSON.parse(getCookie(CART_KEY) || '{}');
  return cart._id ? { _id: cart._id } : null;
};

export const removeCartCookie = () => {
  deleteCookie(CART_KEY);
};
