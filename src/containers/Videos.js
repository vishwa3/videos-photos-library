import React, { /* useEffect, */ useRef } from "react";
/* import { useDispatch, useSelector } from "react-redux"; */
import { useDispatch, useSelector } from './react-redux-hooks';
import { searchMediaAction } from "../actions/mediaActions";
import "../styles/style.css";
import Loader from "./Loader";

function Videos() {
  const query = useRef(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(searchMediaAction("dakota", "video"));
  }, []);

  const videos = useSelector(state => state.vid.videoArray);
  const error = useSelector(state => state.errorReducer.error);

  const handleSearch = event => {
    console.log('hello world'); // console statement for the purpose of JEST/Enzyme testing
    event.preventDefault();
    if (query.current.value !== null && query.current.value !== "") {
      dispatch(searchMediaAction(query.current.value, "video"));
      query.current.value = "";
    }
  };
  const handleKeyPress = event => {
    if (event.key === 'Enter' && query.current.value !== null && query.current.value !== "") {
      dispatch(searchMediaAction(query.current.value, "video"));
      query.current.value = "";
    }
  }

  return (
    <div className="container-fluid">
      {!error ? (<div>{videos.length > 0 ? (
        <div>
          <div className="searchButton">
            <input
              type="text"
              onKeyPress={handleKeyPress}
              style={{ marginRight: 5 }}
              ref={query}
            />
            <input
              type="submit"
              className="btn btn-primary"
              value="Search Videos"
              onClick={handleSearch}
            />
          </div>
          <div>
            <h2 className="heading">Videos</h2>
            <div style={{ textAlign: "center" }}>
              <section className="videogrid">
                {videos.map(video => (
                  <div key={video.id}>
                    <video controls src={video.mediaUrl} alt={video.description} />
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>
      ) : (<Loader />)}</div>) : (<div><div className="searchButton">
        <input
          type="text"
          onKeyPress={handleKeyPress}
          style={{ marginRight: 5 }}
          ref={query}
        />
        <input
          type="submit"
          className="btn btn-primary"
          value="Search Videos"
          onClick={handleSearch}
        />
      </div><h3>Error</h3>{error && <div className="error">{JSON.stringify(error)}</div>}</div>)}

    </div>
  )

}

export default Videos;