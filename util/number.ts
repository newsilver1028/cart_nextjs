export const getFormattedPrice = (price: number) => {
  const formattedPrice = new Intl.NumberFormat('ko-kr', { style: 'currency', currency: 'KRW' }).format(price);
  return formattedPrice;
};
