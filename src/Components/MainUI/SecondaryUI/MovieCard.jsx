import React from "react";

const MovieCard = ({ imgId }) => {
  return (
    <div className="h-[120px] aspect-video">
      <img
        className="h-full w-full "
        src={"https://image.tmdb.org/t/p/w92" + imgId}
        alt=""
      />
    </div>
  );
};

export default MovieCard;
