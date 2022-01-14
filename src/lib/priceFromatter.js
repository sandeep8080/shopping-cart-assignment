
// Function to format the Price into INR and formatting it using JS Intl API
export default function priceFromatter(price) {
  const options = {
    style: 'currency',
    currency: 'INR'
  };
  const formatter = Intl.NumberFormat('en-IN', options);

  return formatter.format(price);
};