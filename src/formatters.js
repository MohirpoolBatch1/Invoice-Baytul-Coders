const totalAmount = amount => {
  try {
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'GBP',
    }).format(amount)
  } catch (err) {
    throw Error(`Amount is not defined ${err}`)
  }
}

const formatedDate = dates => {
  try {
    const newDate = new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(dates)
    return newDate
  } catch (err) {
    throw Error(`Dates are not defined ${err}`)
  }
}

export {totalAmount, formatedDate}
