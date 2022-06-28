import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://serene-plains-38345.herokuapp.com',
  }),
  endpoints: builder => ({
    getSingleInvoice: builder.query({
      query: ({id}) => `/invoice/${id}`,
    }),
    getAllInvoices: builder.query({
      query: () => `/invoice`,
    }),
  }),
})
export const {useGetSingleInvoiceQuery, useGetAllInvoicesQuery} = apiSlice
