export const countTotal = (items) => {
  return items.reduce((sum, { count }) => sum + count, 0);
};

export const countFinalPrice = (items) => {
  return items.reduce((sum, { count, price }) => sum + (count * price), 0);
};