import { useParams } from "react-router-dom";

import { useGetCountryFoodQuery } from "../redux/data";
import Error from "../components/Error";
import Loading from "../components/Loading";
import RecipeCard from "../components/RecipeCard";

const Search = () => {
  const { q } = useParams();
  const { data, isFetching, isError } = useGetCountryFoodQuery(q);
  console.log(useGetCountryFoodQuery(q));

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

      {data?.recipes?.length < 1 && !isFetching && !isError && (
        <div className="flex flex-wrap gap-5 justify-center items-center font-fira font-semibold mt-5">
          Sorry, couldn't find anything.
        </div>
      )}
    </div>
  );
};

export default Search;
