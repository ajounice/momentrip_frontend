import ReactPlayer from 'react-player';
import React from 'react';
import { IShortFormVideo } from '../../globalType';

function ShortFormVideo(videoProps : IShortFormVideo) {
  return (
    <>
      {' '}
      <ReactPlayer
        width={window.innerWidth}
        height={window.innerHeight}
        className="short-form"
        // eslint-disable-next-line react/destructuring-assignment
        url={videoProps.videoUrl}
        muted
        playing
        onPlay={() => { console.log('play'); }}
      />
    </>
  );
}

export default ShortFormVideo;
