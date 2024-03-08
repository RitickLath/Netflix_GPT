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
  }, []);
  if (!popular) {
    return;
  }

  return (
    <div className="pl-0 mt-8">
      <h1 className="text-2xl pl-2 font-semibold ">{topic}</h1>
      <div className="">
        {popular && (
          <div className="flex overflow-x-scroll scroll">
            <div className="flex space-x-3">
              {popular.map((movie, i) => (
                <MovieCard key={movie.id} imgId={movie.poster_path} MovieName={movie?.original_title}/>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category2;
