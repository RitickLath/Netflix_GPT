import React, { useContext } from "react";
import MovieCard from "./MovieCard";
import UserContext from "../../../Context/UserContext";

const Category1 = () => {
  const { movieList, setMovieList } = useContext(UserContext);

  return (
    <div className="pl-10">
      <h1 className="text-2xl mb-4 font-semibold ">Now Playing</h1>
      <div className="">
        {movieList && (
          <div className="flex overflow-x-scroll">
            <div className="flex space-x-3">
              {console.log(movieList?.[0]?.original_title)}
              {movieList.map((movie) => (
                <MovieCard
                  key={movie.id}
                  imgId={movie.poster_path}
                  MovieName={movie?.original_title}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category1;
