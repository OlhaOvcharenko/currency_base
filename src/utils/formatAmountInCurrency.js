export const formatAmountInCurrency = (amount, currency) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  });

  const formattedAmount = formatter.format(amount);

  // Remove space between the currency symbol and the amount
  const normalizedFormattedAmount = formattedAmount.replace(new RegExp(`\\s?${currency}\\s?`, 'g'), `${currency}`);

  return normalizedFormattedAmount;
};