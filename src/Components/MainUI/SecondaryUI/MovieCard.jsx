import React, { useState } from "react";

const MovieCard = ({ imgId, MovieName }) => {
  const [hoverEvent, setHoverEvent] = useState(false);

  return (
    <div
      onMouseEnter={() => setHoverEvent(true)}
      onMouseLeave={() => setHoverEvent(false)}
      className="lg:h-[130px] sm:h-[130px] md:h-[120px] h-[110px] aspect-video m-2 relative"
    >
      <img
        className={`h-full w-full ${hoverEvent ? "opacity-30" : ""}`}
        src={"https://image.tmdb.org/t/p/w500" + imgId}
        alt=""
      />
      {hoverEvent && MovieName && (
        <h1 className="absolute top-0 left-1 text-lg sm:text-2xl">
          {MovieName}
        </h1>
      )}
    </div>
  );
};

export default MovieCard;
