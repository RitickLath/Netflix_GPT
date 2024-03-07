import React, { useEffect, useState } from "react";
import { options } from "../../Constants/APIKey";
import MovieCard from "../MainUI/SecondaryUI/MovieCard";

const Display = ({ result }) => {
  const [postersArray, setPostersArray] = useState(null);
  const [moviesArray, setMoviesArray] = useState([]);
  const [movieTitle, setMoviesTitles] = useState([]);

  const posterCall = async (search) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search}`,
      options
    );
    const jsondata = await data.json();

    //return jsondata.results;
    return jsondata.results[0]?.poster_path;
    //console.log(jsondata.results[0]?.poster_path);
  };

  const TitleCall = async (search) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search}`,
      options
    );
    const jsondata = await data.json();

    //return jsondata.results;
    return jsondata.results[0]?.original_title;
    //console.log(jsondata.results[0]?.poster_path);
  };

  useEffect(() => {
    if (result) {
      const moviesArray = result.split(",").map((movie) => movie.trim());
      setMoviesArray(moviesArray);

      const fetchPosters = async () => {
        const posters = await Promise.all(moviesArray.map(posterCall));
        setPostersArray(posters);
      };
      fetchPosters();
    }
  }, [result]);

  useEffect(() => {
    if (result) {
      const fetchTitle = async () => {
        const Titles = await Promise.all(moviesArray.map(TitleCall));
        setMoviesTitles(Titles);
      };
      fetchTitle();
    }
  }, [result]);

  return (
    <div className="">
      {postersArray && (
        <div className="mt-12 flex flex-wrap justify-center p-3">
          {postersArray.map((id, i) => (
            <MovieCard key={id} imgId={id} MovieName={movieTitle[i]} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Display;
