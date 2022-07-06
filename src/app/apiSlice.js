import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {baseUrl} from './constants'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: builder => ({
    getSingleInvoice: builder.query({
      query: ({id}) => `/invoice/${id}`,
    }),
  }),
})
export const {useGetSingleInvoiceQuery} = apiSlice
