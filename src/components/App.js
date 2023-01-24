import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';

import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  //useState
  //const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('Ethiopia'); //this our customized hook

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);
  //useEffect-if it runs one time it equals to component did mount
  /* useEffect(() => {
    onTermSubmit('trending');
  }, []); */
  //on term submit
  /*  const onTermSubmit = async (term) => {
    //console.log(term); //to link the term with the input.value we use this callback in searchbaar.js
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    //updating our states
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  }; */

  //on video select
  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };
  //JSX
  return (
    <div className="ui container" style={{ marginTop: 10 }}>
      <SearchBar onFormSubmit={search} />

      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            {' '}
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
