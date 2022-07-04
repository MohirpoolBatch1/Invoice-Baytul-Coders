import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://serene-plains-38345.herokuapp.com'

export const apiSlice = createApi({
  reducerPath: 'items',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: builder => ({
    getItems: builder.query({
      query: () => '/invoice',
    }),
  }),
})

export const {useGetItemsQuery} = apiSlice
