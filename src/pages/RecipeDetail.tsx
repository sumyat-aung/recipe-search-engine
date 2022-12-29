import React, { useRef } from "react";
import { useGetDetailsQuery } from "../redux/data";
import { Link, useParams } from "react-router-dom";

import Loading from "../components/Loading";
import Error from "../components/Error";
import { useEffect } from "react";

const RecipeDetail = () => {
  const { id } = useParams();

  const { isError, isFetching, data } = useGetDetailsQuery(id);

  console.log(data);

  const elementRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    elementRef?.current!.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div ref={elementRef} className="min-h-[100vh] pb-10 pt-16 relative">
      {isFetching && <Loading />}
      {isError && <Error />}
      {data && !isFetching && !isError && (
        <div className=" flex flex-col justify-center items-center w-full">
          <div className="relative md:w-[600px] w-[90%] shadow">
            <img
              src={
                data?.image ||
                "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"
              }
              alt={data?.title}
              className="w-full h-[350px] object-cover rounded-md"
            />
            <img
              src={data?.image}
              alt={data?.title}
              className="w-full h-[350px] object-cover rounded-md absolute top-0 left-0 blur-[5px] -z-10"
            />
          </div>

          <h1 className="truncate  w-full font-fira text-xl font-semibold mt-5 pb-5">
            {data?.title}
          </h1>

          <div className="pt-2 pb-8 border-t">
            <h2 className="truncate font-fira text-2xl text-semibold mt-5">
              Ingredients
            </h2>
            <div className="flex flex-wrap gap-5 justify-center items-center mt-5 ">
              {data?.extendedIngredients?.map((i: any, index: number) => (
                <div
                  key={index}
                  className="border border-bk rounded-xl font-fira text-sm p-2 font-semibold w-[150px] flex justify-center items-center flex-col "
                >
                  <h2 className="text-center">{i?.name}</h2>
                  <p>{i?.measures?.metric?.amount}g</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-y pb-5">
            <h2 className="truncate font-fira text-2xl text-semibold my-5">
              Instructions
            </h2>

            <ol className="flex flex-col gap-2 list-decimal  sm:list-outside list-inside">
              {data?.analyzedInstructions[0]?.steps?.map((a: any) => (
                <li
                  key={a?.number}
                  className="font-fira text-sm py-2 font-semibold"
                >
                  <h2>{a?.step}</h2>
                </li>
              ))}
            </ol>
          </div>

          <div className="font-fira text-sm font-semibold my-5">
            <h2 className="truncate font-fira text-2xl text-semibold mb-4">
              Summary
            </h2>

            <h1 dangerouslySetInnerHTML={{ __html: data?.summary }}></h1>
          </div>

          <Link to={".."}>
            <i className="fa fa-arrow-left text-lg hover:-translate-x-1 ml-3 transition-all cursor-default sm:cursor-pointer absolute top-5 left-5"></i>
          </Link>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
