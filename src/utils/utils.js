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

export function getTotalAmount(price = 0, quantity = 0) {
  return price * quantity
}

export const convertToNumber = (name, value) => {
  if (name === 'name') return value
  if (value !== '') return +value
  return value
}
