import React, { useEffect, useState } from "react";
import { options } from "../../../Constants/APIKey";
import MovieCard from "./MovieCard";

const Category2 = ({ page, topic }) => {
  const [popular, setPopular] = useState(null);

  async function Popular() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
      options
    );
    const JSONData = await response.json();
    setPopular(JSONData.results);

    return JSONData.results;
  }

  useEffect(() => {
    async function fetchData() {
      const data = await Popular();
      setPopular(data);
    }

    fetchData();
    console.log("popualar");
  }, []);
  if (!popular) {
    return;
  }

  return (
    <div className="pl-10 mt-8">
      {console.log(popular)}
      <h1 className="text-2xl mb-4 font-semibold ">{topic}</h1>
      <div className="">
        {popular && (
          <div className="flex overflow-x-scroll scroll">
            <div className="flex space-x-3">
              {popular.map((movie) => (
                <MovieCard key={movie.id} imgId={movie.poster_path} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category2;
