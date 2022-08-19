export function getTotalAmount(price = 0, quantity = 0) {
  return price * quantity
}

export const convertToNumber = (name, value) => {
  if (name === 'name') return value
  if (value !== '') return +value
  return value
}
