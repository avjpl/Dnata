export default (amount) => {
  return Number(amount).toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
  });
};
