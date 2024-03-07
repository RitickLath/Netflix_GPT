import React, { useContext, useEffect, useState } from "react";
import Header from "./HeaderInside";
import BgVideo from "./BgVideo";
import { options } from "../../../Constants/APIKey";
import Description from "./Description";
import UserContext from "../../../Context/UserContext";

const PrimaryUI = () => {
  const { movieList, setMovieList } = useContext(UserContext);
  const [nowPlay, setNowPlay] = useState(null);
  const [mute, setmute] = useState(1);

  async function nowPlaying() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const JSONData = await response.json();
    const i = Math.round(Math.random() * 15);
    setMovieList(JSONData.results);

    return [
      JSONData.results[i].title,
      JSONData.results[i].id,
      JSONData.results[i].overview,
    ];
  }

  useEffect(() => {
    async function fetchData() {
      const data = await nowPlaying();
      setNowPlay(data);
    }

    fetchData();
  }, []);
  if (!nowPlay) {
    return;
  }

  return (
    <div>
      {/* {console.log("Movie list")}
      {console.log(movieList)} */}
      <Header />
      <h1 className="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        obcaecati consequatur iusto doloremque. Odio hic, veritatis voluptas
        recusandae accusamus temporibus cum delectus corrupti animi adipisci
        exercitationem, incidunt libero quasi neque.
      </h1>
      <BgVideo mute={mute} id={nowPlay?.[1]} />
      <Description
        mute={mute}
        setmute={setmute}
        title={nowPlay?.[0]}
        description={nowPlay?.[2]}
      />
    </div>
  );
};

export default PrimaryUI;
