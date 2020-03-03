import React, { useRef } from "react";

import { useDispatch, useSelector } from "./react-redux-hooks";
import { searchMediaAction } from "../reducers/actions/mediaActions";

import "../styles/style.css";
import Loader from "./Loader";
import SearchBar from "./SearchBar";
export function Photos() {
  const query = useRef(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(searchMediaAction("dakota", "image"));
  }, []);

  const images = useSelector(state => state.img.imageArray);
  const error = useSelector(state => state.errorReducer.error);

  const handleSearch = event => {
    event.preventDefault();
    if (query.current.value !== null && query.current.value !== "") {
      dispatch(searchMediaAction(query.current.value, "image"));
      query.current.value = "";
    }
  };
  const handleKeyPress = event => {
    if (
      event.key === "Enter" &&
      query.current.value !== null &&
      query.current.value !== ""
    ) {
      dispatch(searchMediaAction(query.current.value, "image"));
      query.current.value = "";
    }
  };
  return (
    <div className="container-fluid">
      {!error ? (
        <div>
          {images.length > 0 ? (
            <div>
              <SearchBar
                inputRef={query}
                value="Search Images"
                handleSearch={handleSearch}
                handleKeyPress={handleKeyPress}
              />
              <div>
                <h2 className="heading">Images</h2>
                <div className="content">
                  <section className="grid">
                    {images.map(image => (
                      <div
                        key={image.id}
                        className={`item item-${Math.ceil(
                          image.height / image.width
                        )}`}
                      >
                        <img
                          className="img-style"
                          src={image.urls.small}
                          alt={image.alt_description}
                        />
                      </div>
                    ))}
                  </section>
                </div>
              </div>
            </div>
          ) : (
            <Loader />
          )}
        </div>
      ) : (
        <div>
          <SearchBar />
          <h3>Error</h3>
          {error && <div className="error">{JSON.stringify(error)}</div>}
        </div>
      )}
    </div>
  );
}

export default Photos;
