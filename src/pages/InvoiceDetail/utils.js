export const prettyLocaleDate = date =>
  new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
export const prettyCurrency = amount =>
  parseFloat(amount).toLocaleString('en-US', {
    style: 'currency',
    currency: 'GBP',
  })
