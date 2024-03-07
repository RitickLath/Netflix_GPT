import React, { useEffect, useState } from "react";
import { options } from "../../../Constants/APIKey";
import { data } from "autoprefixer";

function filterLogic(obj) {
  if (obj.type == "Trailer") {
    return obj;
  }
}

// video related to id
async function video(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos`,
    options
  );
  const JSONData = await response.json();
  const arr = JSONData.results;

  // extracting the trailer object
  const filterData = arr.filter(filterLogic);
  // if there is no trailer then take the 1st video from datas
  const trailer = filterData.length ? filterData[0] : arr[0];

  const ytVideokey = trailer.key;

  return ytVideokey;
}

const BgVideo = ({ id, mute }) => {
  const [key, setKey] = useState();

  useEffect(() => {
    async function fn() {
      const data = await video(id);
      setKey(data);
    }
    fn();
  }, []);

  return (
    <div className="">
      <iframe
        className="w-full aspect-video z-10 -mt-24"
        //key is the id of video, autoplay=1 ensure it plays in bg automatically , mute=1 make it mute , loop=1 make it go in loop and playlist gives what to play on loop
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=${mute}&loop=1&playlist=${key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BgVideo;
