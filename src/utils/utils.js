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

export function getTotalAmount(price, quantity) {
  return price && quantity ? +price * +quantity : 0
}

export const convertToNumber = (name, value) => {
  if (name === 'name') return value
  if (value !== '') return +value
  return value
}
