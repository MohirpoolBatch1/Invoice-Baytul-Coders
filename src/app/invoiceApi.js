import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const invoiceApi = createApi({
  reducerPath: 'invoiceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://serene-plains-38345.herokuapp.com',
  }),
  tagTypes: ['Invoice'],
  endpoints: builder => ({
    getInvoiceItem: builder.query({
      query: id => `/invoice/${id}`,
      providesTags: ['Invoice'],
    }),
    deleteInvoice: builder.mutation({
      query: id => ({
        url: `/invoice/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Invoice'],
    }),
    addInvoice: builder.mutation({
      query: invoice => ({
        url: '/invoice',
        method: 'POST',
        body: invoice,
      }),
      invalidatesTags: ['Invoice'],
    }),
  }),
})

export const {
  useDeleteInvoiceMutation,
  useGetInvoiceItemQuery,
  useAddInvoiceMutation,
} = invoiceApi
