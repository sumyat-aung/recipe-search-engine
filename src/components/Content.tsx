import React, { FormEvent, useRef } from "react";
import {
  Navigate,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import Feed from "../pages/Feed";
import Recipe from "../pages/Recipe";
import Search from "../pages/Search";
import Diet from "../pages/Diet";
import RecipeDetail from "../pages/RecipeDetail";

// ! ^ importing ^

const Content: React.FC = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const searchRecipe = (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current!.value) {
      navigate(`/search/${inputRef.current!.value}`);
    }
  };

  // jsx
  return (
    <>
      <div className="lg:w-[1000px] sm:w-[90%] w-[97%] mt-10 sticky top-0 bg-gray-100 pb-10">
        <form className="relative" onSubmit={(e) => searchRecipe(e)}>
          <input
            type="text"
            placeholder="Search"
            className="w-full px-10 py-3 bg-gray-100 font-semibold focus:outline-none text-gray-800 font-fira border-b border-gray-500 focus:border-b-2"
            ref={inputRef}
          />
          <i
            className="fa-solid fa-magnifying-glass absolute top-4 left-3 text-gray-800 hover:text-gray-700 cursor:default sm:cursor-pointer"
            onClick={(e) => searchRecipe(e)}
          ></i>
        </form>
        <div className="w-full mt-5 lg:justify-between justify-center gap-3 sm:gap-5 items-center flex flex-wrap">
          <NavLink
            to={"/diet"}
            className="text-gray-800 text-lg font-fira px-3 rounded-lg border hover:bg-gray-300 font-semibold border-gray-600 mt-3"
          >
            Diet Food
          </NavLink>
          <NavLink
            to={"/vegetarian"}
            className="text-gray-800 text-lg font-fira px-3 rounded-lg border border-gray-600 mt-3  hover:bg-gray-300 font-semibold"
          >
            Vegetarian Food
          </NavLink>
          <NavLink
            to={"/italian"}
            className="text-gray-800 text-lg font-fira px-3 rounded-lg border border-gray-600 mt-3  hover:bg-gray-300 font-semibold"
          >
            Italian Food
          </NavLink>
          <NavLink
            to={"/indian "}
            className="text-gray-800 text-lg font-fira px-3 rounded-lg border border-gray-600 mt-3  hover:bg-gray-300 font-semibold"
          >
            India Food
          </NavLink>
          <NavLink
            to={"/mexican"}
            className="text-gray-800 text-lg font-fira px-3 rounded-lg border border-gray-600 mt-3  hover:bg-gray-300 font-semibold"
          >
            Mexican Food
          </NavLink>
        </div>
      </div>
      <div className="lg:w-[1000px] sm:w-[90%] w-[97%] pb-10 relative -z-20">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/:name" element={<Recipe />} />
          <Route path="/:name" element={<Recipe />} />
          <Route path="/:name" element={<Recipe />} />
          <Route path="/:name" element={<Recipe />} />
          <Route path="/search/:q" element={<Search />} />
          <Route path="*" element={<Navigate to={"/"} />} />

          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </>
  );
};

export default Content;
