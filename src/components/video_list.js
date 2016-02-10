//Parent of video_list_item & video_detail
//Functional/Dumb component
//props object is an argument
//this is also an example of using the built in map iterator
//array.map to render out a list of divs. Stay away from for loops

import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
  	//adding this key lets react know each video has a key otherwise it will throw and error.
    return (
      <VideoListItem
       	onVideoSelect={props.onVideoSelect}
		key={video.etag} 
        video={video} />
     );
  });
  
  return (
    <ul className="">
      {videoItems}
    </ul>
  );
};

export default VideoList;
