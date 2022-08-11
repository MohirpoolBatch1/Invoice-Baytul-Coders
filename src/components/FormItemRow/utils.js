export function getTotalAmount(price, quantity) {
  return (
    (price && quantity
      ? parseFloat(price) * parseFloat(quantity)
      : null
    )?.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) || '0.00'
  )
}

export const convertToNumber = (name, value) => {
  if (name === 'name') return value
  if (value !== '') return +value
  return value
}
