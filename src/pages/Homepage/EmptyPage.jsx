import React from 'react'
import illustrationEmpty from '../../assets/illustration-empty.svg'

const EmptyPage = () => (
  <div className="flex h-full w-full flex-col items-center justify-center">
    <img src={illustrationEmpty} alt="Illustration empty" />
    <h2 className="mt-12 text-lg font-bold">There is noting here</h2>
    <p className="mt-5 text-center text-xs text-gray-300">
      Create an invoice by clicking the <br />
      <span className="font-bold">New Invoice</span> button and get started
    </p>
  </div>
)

export default EmptyPage
