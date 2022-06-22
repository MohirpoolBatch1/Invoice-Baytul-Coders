import React from 'react'
import illustrationEmpty from '../../assets/illustration-empty.svg'

const EmptyPage = () => (
  <div className="mt-16 w-full text-center">
    <img
      src={illustrationEmpty}
      alt="Illustration empty"
      className="inline-block"
    />
    <h2 className="mt-12 text-lg font-bold">There is noting here</h2>
    <p className="mt-5 text-center text-xs text-gray-300">
      Create an invoice by clicking the <br />
      <span className="font-bold">New Invoice</span> button and get started
    </p>
  </div>
)

export default EmptyPage
