export enum Route {
  CART = '/cart',
  LOGIN = '/auth?tab=sign-in',
  HOME = '/',
  CHECKOUT = '/cart/checkout',
  FINISH = '/cart/checkout/finish',
  PROFILE = '/profile',
  ORDERS = '/profile/orders',
}

export const protectedRoutes: Route[] = [Route.PROFILE, Route.ORDERS];
