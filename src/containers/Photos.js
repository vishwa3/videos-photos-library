import React, { /* useEffect, */ useRef } from "react";
//import { useDispatch, useSelector } from "react-redux";
import { useDispatch, useSelector } from './react-redux-hooks';
import { searchMediaAction } from "../actions/mediaActions";

import "../styles/style.css";
import Loader from "./Loader";

export function Photos() {
  const query = useRef(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(searchMediaAction("dakota", "image"));
  }, []);

  const images = useSelector(state => state.img.imageArray);
  const error = useSelector(state => state.errorReducer.error);


  const handleSearch = event => {
 /*    console.log('hello world'); // console statement for the purpose of JEST/Enzyme testing */
    event.preventDefault();
    if (query.current.value !== null && query.current.value !== "") {
      dispatch(searchMediaAction(query.current.value, "image"));
      query.current.value = "";
    }
  };
  const handleKeyPress = event => {
    if (event.key === 'Enter' && query.current.value !== null && query.current.value !== "") {
      dispatch(searchMediaAction(query.current.value, "image"));
      query.current.value = "";
    }
  }
  return (
    <div className="container-fluid">
      {!error ? (<div>{images.length > 0 ? (
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
              value="Search Images"
              id="search"
              onClick={handleSearch}
            />
          </div>
          <div>
            <h2 className="heading">Images</h2>
            <div className="content">
              <section className="grid">
                {images.map(image => (
                  <div key={image.id} className={`item item-${Math.ceil(
                    image.height / image.width,
                  )}`}>
                    <img className="img-style" src={image.urls.small} alt={image.alt_description} />
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>) : (<Loader />)}</div>) : (<div> <div className="searchButton">
          <input
            type="text"
            onKeyPress={handleKeyPress}
            style={{ marginRight: 5 }}
            ref={query}
          />
          <input
            type="submit"
            className="btn btn-primary"
            value="Search Images"
            onClick={handleSearch}
          />
        </div><h3>Error</h3>{error && <div className="error">{JSON.stringify(error)}</div>}</div>)
      }

    </div>
  )

}

export default Photos;