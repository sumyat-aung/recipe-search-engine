import React from "react";
import { Link, NavLink } from "react-router-dom";

// ! ^ importing ^

const RecipeCard = ({ recipe }: any) => {
  // jsx
  return (
    <Link
      to={`/recipe/:${recipe?.id}`}
      className="border-black w-[280px] shadow relative z-10"
    >
      <div className="relative">
        <img
          src={
            recipe?.image ||
            "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"
          }
          alt={recipe?.title}
          className="w-full h-[250px] object-cover rounded-t-md"
        />
        <img
          src={recipe?.image}
          alt={recipe?.title}
          className="w-full h-[250px] object-cover rounded-t-md absolute top-0 left-0 blur-[5px] -z-10"
        />
      </div>
      <div className="p-5">
        <h1 className="truncate font-fira font-semibold ">{recipe?.title}</h1>
        <div className="flex gap-2 ">
          {recipe?.cuisines?.map((c: string) => (
            <>
              <h2
                className="truncate mt-1 font-fira text-gray-800 text-xs font-semibold"
                key={c}
              >
                {"/"} {c}
              </h2>
            </>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
