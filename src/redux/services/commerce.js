import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commerceApi = createApi({
    reducerPath: 'commerceApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => 'products',
        }),
        getAllCategories: builder.query({
            query: ()=> 'products/categories'
        }),
        getSingleCategory: builder.query({
            query: (category) => `products/category/${category}`
        }),
        getProductDetail: builder.query({
            query: (id) => `products/${id}`
        })
    })
});

export const { useGetAllProductsQuery, useGetAllCategoriesQuery, useGetSingleCategoryQuery, useGetProductDetailQuery } = commerceApi;