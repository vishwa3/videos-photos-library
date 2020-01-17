import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  selectImageAction, searchMediaAction,
  selectVideoAction
} from '../actions/mediaActions';
import PhotosPage from '../components/PhotosPage';
import VideosPage from '../components/VideosPage';
import '../styles/style.css';
import { bindActionCreators } from 'redux';
import searchMediaThunk from '../thunk/thunk'
import * as types from '../constants/actionTypes';

export class MediaThunk extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelectImage = this.handleSelectImage.bind(this);
    this.handleSelectVideo = this.handleSelectVideo.bind(this);
  }

  componentDidMount() {
    this.props.searchMediaAction("rain");
  }

  handleSelectImage(selectedImage) {
    this.props.selectImageAction(selectedImage);
  }

  handleSelectVideo(selectedVideo) {
    this.props.selectVideoAction(selectedVideo);
  }

  handleSearch(event) {
    event.preventDefault();
    if (this.query.value !== null && this.query.value !== '') {
      console.log("query",this.query.value);
      this.props.searchMediaAction(this.query.value);
      this.query.value = '';
    }
  }

  render() {
    const { images, selectedImage, videos, selectedVideo } = this.props;
/*     console.log("images",images)
    console.log("selectedImage",selectedImage)
    console.log("videos",videos)
    console.log("selectedVideo",selectedVideo) */
    //console.log("val",images.length>0 && Object.keys(selectedImage).length>0 && videos.length>0 && Object.keys(selectedVideo).length>0)
    return (
      <div className="container-fluid">
        {images.length>0 && Object.keys(selectedImage).length>0 && videos.length>0 && Object.keys(selectedVideo).length>0 ? (<div>
          <input
            type="text"
            ref={ref => (this.query = ref)}
          />
          <input
            type="submit"
            className="btn btn-primary"
            value="Search Library"
            onClick={this.handleSearch}
          />
          <div className="row">
            <PhotosPage
              images={images}
              selectedImage={selectedImage}
              onHandleSelectImage={this.handleSelectImage}
            />
            <VideosPage
              videos={videos}
              selectedVideo={selectedVideo}
              onHandleSelectVideo={this.handleSelectVideo}
            />
          </div>
        </div>) : 'loading ....'}
      </div>
    );
  }
}

MediaThunk.propTypes = {
  images: PropTypes.array,
  selectedImage: PropTypes.object,
  videos: PropTypes.array,
  selectedVideo: PropTypes.object,
  //dispatch: PropTypes.func.isRequired
};
 
/* Subscribe component to redux store and merge the state into component\s props */
/* const mapStateToProps = ({ images, videos }) => ({
  images: images[0],
  selectedImage: images.selectedImage,
  videos: videos[0],
  selectedVideo: videos.selectedVideo
}); */

const mapStateToProps = (state) => ({
  images:state.img.imageArray,
  selectedImage:state.img.selectedImage,
  videos:state.vid.videoArray,
  selectedVideo:state.vid.selectedVideo,
  stat:state
})

const mapDispatchToProps = dispatch => bindActionCreators({
  searchMediaThunk:searchMediaThunk,
  selectImageAction:selectImageAction,
  selectVideoAction:selectVideoAction,
  searchMediaAction:searchMediaAction
},dispatch)

/* connect method from react-router connects the component with redux store */
export default connect(mapStateToProps,mapDispatchToProps)(MediaThunk);