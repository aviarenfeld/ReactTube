import React from 'react';
//when i get clicked call that function from video_list
//deep passing of child calling parent function
const VideoListItem = ({video, onVideoSelect}) => {
  //const video = props.video; has been refractored with ES6 sugar replace (props) with ({videos})
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)} className="">
      <div className="">
        <div className="">
          <img className="" src={imageUrl} />
        </div>

        <div className="">
          <div className="">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;