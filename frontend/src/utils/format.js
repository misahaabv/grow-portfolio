export function formatINR(price) {
  const num = parseFloat(price);
  if (isNaN(num)) return price;
  return '₹' + num.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function getChangeClass(change) {
  return parseFloat(change) < 0 ? 'negative' : 'positive';
}

export function formatChange(change, percentage) {
  if (isNaN(change)) return '';
  const sign = parseFloat(change) > 0 ? '+' : '';
  return `${sign}${Number(change).toFixed(2)} (${percentage})`;
}
