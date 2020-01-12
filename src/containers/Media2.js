import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  selectImageAction,
  searchMediaAction,
  selectVideoAction
} from "../actions/mediaActions";
import PhotosPage from "../components/PhotosPage";
import VideosPage from "../components/VideosPage";
import "../styles/style.css";

export function Media2(props) {
  const query = useRef(null);

  useEffect(() => {
    console.log("useEffect");
    props.dispatch(searchMediaAction("rain"));
  }, []);

  const handleSelectImage = selectedImage => {
    console.log("handleSelectImage");
    props.dispatch(selectImageAction(selectedImage));
  };

  const handleSelectVideo = selectedVideo => {
    console.log("handleSelectVideo");
    props.dispatch(selectVideoAction(selectedVideo));
  };

  const handleSearch = event => {
    console.log("handleSearch");
    event.preventDefault();
    if (query.current.value !== null && query.current.value !== "") {
      props.dispatch(searchMediaAction(query.current.value));
      query.current.value = "";
    }
  };
  const { images, selectedImage, videos, selectedVideo } = props;

  return (
    <div className="container-fluid">
      {images && selectedImage && videos && selectedVideo ? (
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
        "loading ...."
      )}
    </div>
  );
}

Media2.propTypes = {
  images: PropTypes.array,
  selectedImage: PropTypes.object,
  videos: PropTypes.array,
  selectedVideo: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

/* Subscribe component to redux store and merge the state into component\s props */
const mapStateToProps = ({ images, videos }) => ({
  images: images[0],
  selectedImage: images.selectedImage,
  videos: videos[0],
  selectedVideo: videos.selectedVideo
});

/* connect method from react-router connects the component with redux store */
export default connect(mapStateToProps)(Media2);
