//this is a practice to a custom hooks
import { useState, useEffect } from 'react';
import youtube from '../API/youtube';

const useVideos = (defaultSearchTerm) => {
  //hooks related to video
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    //console.log(term); //to link the term with the input.value we use this callback in searchbaar.js
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    //updating our states

    setVideos(response.data.items);
    //return videos and the function
  };
  return [videos, search];
};
export default useVideos;
