// import is used to connects modular js files. 
// this says that this file needs to import and use 'react' 
// react library creates and manages our components
// also import react-dom. ReactDOM allows what your rendering to be seen on the DOM;)
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import the serach_bar component
// you have to give a file reference when importing a component
//
import YTSearch from 'youtube-api-search'; 

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//API key
//AIzaSyAuw7_HkCbkihr37j5zBDOi3PPD2bVAA7M
const API_KEY = 'AIzaSyAuw7_HkCbkihr37j5zBDOi3PPD2bVAA7M';



// Create a class/smart compnent 
// This Component should produce some HTML
// When app starts we get instance of App in the DOM.
// It starts with an empty array
// The constructor will run and kickoff search
// Callback function will update this.state with new data. 
class App extends Component {
  constructor(props) {
  	super(props);
    //to this state add the selected video object set to null
    //below we pass it into VideoDetail 
  	this.state = { 
  	  videos: [],
  	  selectedVideo: null
  	 };

  	YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0] 
      });
    });
  }
  //Here we can pass data or passing props from App the parent
  //to VideoList the child component. Now VideoList will also get the new videos.*/
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
          videos={this.state.videos} />
      </div>
    );
  }
}

// Put this component's generated HTML and put it
// on the page (in the DOM)
 
ReactDOM.render(<App />, document.querySelector('.container'));