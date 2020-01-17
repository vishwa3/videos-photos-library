import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
/* import PropTypes from "prop-types";
import { connect } from "react-redux"; */
import {
  selectImageAction,
  searchMediaAction,
  selectVideoAction,
} from "../actions/mediaActions";
import PhotosPage from "../components/PhotosPage";
import VideosPage from "../components/VideosPage";
import "../styles/style.css";
import Loader from "./Loader";
import searchMediaThunk from '../thunk/thunk'
import * as types from '../constants/actionTypes';

export function Media2(props) {
  const query = useRef(null);
  //const {dispatch} = props;
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("useEffect");
   // dispatch(searchMediaAction("rain"));
   dispatch({type:types.RESET_REDUCER_STORE,
     callback: () => {
       console.log("in callback hehe")
       dispatch(searchMediaThunk("rain"));
     }
   });
  }, []);

/*   const images = useSelector(state =>state.images[0]);
  const selectedImage = useSelector(state => state.images.selectedImage);
  const videos = useSelector(state => state.videos[0]);
  const selectedVideo = useSelector(state => state.videos.selectedVideo); */

  const images = useSelector(state =>state.img.imageArray);
  const selectedImage = useSelector(state => state.img.selectedImage);
  const videos = useSelector(state => state.vid.videoArray);
  const selectedVideo = useSelector(state => state.vid.selectedVideo);

  const handleSelectImage = selectedImage => {
    dispatch(selectImageAction(selectedImage));
  };

  const handleSelectVideo = selectedVideo => {
  dispatch(selectVideoAction(selectedVideo));
  };

  const handleSearch = event => {
    event.preventDefault();
   // dispatch(resetReduxStore());
    if (query.current.value !== null && query.current.value !== "") {
  //  dispatch(searchMediaAction(query.current.value));
  dispatch({type:types.RESET_REDUCER_STORE,
    callback: () => {
      console.log("in callback hehe")
      dispatch(searchMediaThunk(query.current.value));
    }
  });
 // dispatch(searchMediaThunk(query.current.value));
      query.current.value = "";
    }
  };
 

  return (
    <div className="container-fluid">
      {images.length>0 && Object.keys(selectedImage).length>0 && videos.length>0 && Object.keys(selectedVideo).length>0 ? (
        <div>
          <input
            type="text"
            // ref={ref => (this.query = ref)}
            ref={query}
          />
          <input
            type="submit"
            className="btn btn-primary"
            value="Search Library"
            onClick={handleSearch}
          />
          <div className="row">
            <PhotosPage
              images={images}
              selectedImage={selectedImage}
              onHandleSelectImage={handleSelectImage}
            />
            <VideosPage
              videos={videos}
              selectedVideo={selectedVideo}
              onHandleSelectVideo={handleSelectVideo}
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

/* Media2.propTypes = {
  images: PropTypes.array,
  selectedImage: PropTypes.object,
  videos: PropTypes.array,
  selectedVideo: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};
 */
/* Subscribe component to redux store and merge the state into component\s props */
/*  const mapStateToProps = ({ images, videos }) => ({
  images: images[0],
  selectedImage: images.selectedImage,
  videos: videos[0],
  selectedVideo: videos.selectedVideo
}); */
 
/* connect method from react-router connects the component with redux store */
/* export default connect(mapStateToProps)(Media2); */
export default Media2;
