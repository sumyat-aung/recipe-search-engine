import { useParams } from "react-router-dom";

import { useGetCountryFoodQuery } from "../redux/data";
import Error from "../components/Error";
import Loading from "../components/Loading";
import RecipeCard from "../components/RecipeCard";

const Search: React.FC = () => {
  const { q } = useParams();
  const { data, isFetching, isError } = useGetCountryFoodQuery(q);

  return (
    <div>
      {isFetching && <Loading />}
      {isError && <Error />}

      {data?.recipes?.length > 0 && !isFetching && !isError && (
        <h1 className="text-xl font-fira mb-5 font-semibold">
          Search Result for: {q}
        </h1>
      )}

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
