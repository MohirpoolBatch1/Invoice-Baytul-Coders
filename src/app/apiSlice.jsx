import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {BASEURL} from './constants.jsx'

export const apiSlice = createApi({
  reducerPath: 'items',
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
  }),
  endpoints: builder => ({
    getItems: builder.query({
      query: () => '/invoice',
    }),
  }),
})

export const {useGetItemsQuery} = apiSlice
