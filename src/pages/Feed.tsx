import React from "react";

import { useGetCountryFoodQuery } from "../redux/data";
import Error from "../components/Error";
import Loading from "../components/Loading";
import RecipeCard from "../components/RecipeCard";

// ! ^ importing ^

const Feed: React.FC = () => {
  const { data, isFetching, isError } = useGetCountryFoodQuery("dessert");

  // jsx
  return (
    <div>
      {isFetching && <Loading />}
      {isError && <Error />}
      {data && !isFetching && !isError && (
        <div className="flex flex-wrap gap-5 justify-center items-center">
          {data?.recipes?.map((r: { id: any }) => {
            return <RecipeCard key={r.id} recipe={r} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Feed;
