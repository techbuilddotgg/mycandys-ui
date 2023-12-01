export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('sl-SL', { style: 'currency', currency: 'EUR' }).format(price);
};
