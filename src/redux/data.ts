import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FOOD_API_KEY } from "../key/key";


export const recipeApi = createApi({
    reducerPath: "youtubeApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.spoonacular.com/`, //added base url

    }),
    endpoints: (builder) => ({
        // for feed
        getSearchResult: builder.query({
            query: (q) => ({
                url: `recipes/complexSearch?apiKey=${FOOD_API_KEY}&query=${q}&number=100`,
            }),
        }),

        // for tabs
        getCountryFood: builder.query({
            query: (q) => ({
                url: `recipes/random?apiKey=${FOOD_API_KEY}&number=100&tags=${q}`,
            }),
        }),

        // for details
        getDetails: builder.query({
            query: (q) => ({
                url: `recipes/${q}/information?apiKey=${FOOD_API_KEY}`,
            }),
        }),

    }),
});

export const {
    useGetSearchResultQuery,
    useGetCountryFoodQuery,
    useGetDetailsQuery
} = recipeApi;


