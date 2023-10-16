export const convertPLNToUSD = (PLN) => {

  if (PLN === undefined || PLN === '') {
    return NaN;
  } else if (typeof PLN === 'string') {
    return NaN;
  } else if (typeof PLN !== 'number' && typeof PLN !== 'string') {
    return "Error";
  } else if (typeof PLN === null) {
    return "Error";
  } else if (PLN < 0) {
    return '$0.00';
  } else {
    const PLNtoUSD = PLN / 3.5;
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
  }
}
