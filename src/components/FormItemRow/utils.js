export function getTotalAmount(price, quantity) {
  return price && quantity ? +price * +quantity : 0
}

export const convertToNumber = (name, value) => {
  if (name === 'name') return value
  if (value !== '') return +value
  return value
}
