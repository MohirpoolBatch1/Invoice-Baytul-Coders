export function totalAmount(price, quantity) {
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
