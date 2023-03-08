export const getFormattedPrice = (price: number) => {
  const formattedPrice = new Intl.NumberFormat('ko-kr', { style: 'currency', currency: 'KRW' }).format(price);
  return formattedPrice;
};

export const getPercentPrice = (price: number) => {
  return new Intl.NumberFormat('default', { style: 'percent' }).format(price / 100);
};
