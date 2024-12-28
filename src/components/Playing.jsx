import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../context/Songs";

const Playing = ({ url }) => {
  const { song, hanglePlay } = useContext(Songs);
  const hanleClickNext =()=> {
    hanglePlay(song.id + 1)
  }

  const handleClickPrevious = ()=> {
    hanglePlay(song.id - 1)
  }
  return (
    <div>
      <AudioPlayer
        className="bgr-gray"
        src={song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={hanleClickNext}
        onClickPrevious={handleClickPrevious}
      />
    </div>
  );
};

export default Playing;
