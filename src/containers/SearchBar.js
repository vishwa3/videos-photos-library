import React from "react";
import "../styles/style.css";
const SearchBar = ({ inputRef, value, handleSearch, handleKeyPress }) => {
  return (
    <div className="searchButton">
      <input
        type="text"
        onKeyPress={handleKeyPress}
        style={{ marginRight: 5 }}
        ref={inputRef}
      />
      <input
        type="submit"
        className="btn btn-primary"
        value={value}
        id="search"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
