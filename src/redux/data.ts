import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FOOD_API_KEY } from "../key/key";


export const recipeApi = createApi({
    reducerPath: "youtubeApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.spoonacular.com/`, //added base url
        // prepareHeaders: (headers) => {
        //     headers.set("Content-Type": application/json);
        //     return headers;
        // },
    }),
    endpoints: (builder) => ({
        // for feed
        getSearchResult: builder.query({
            query: (q) => ({
                url: `recipes/complexSearch?apiKey=${FOOD_API_KEY}&query=${q}&number=50`,
            }),
        }),

        // for tabs
        getCountryFood: builder.query({
            query: (q) => ({
                url: `recipes/random?apiKey=${FOOD_API_KEY}&number=100&tags=${q}`,
            }),
        }),


    }),
});

export const {
    useGetSearchResultQuery,
    useGetCountryFoodQuery,
} = recipeApi;


// recipes/random?number=1&tags=vegetarian,dessert