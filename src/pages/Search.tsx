import React from "react";
import { useParams } from "react-router-dom";

const Search = () => {
  const { q } = useParams();
  console.log(q);

  return <div>{q}</div>;
};

export default Search;
