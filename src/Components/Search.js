import React from "react";

function Search({ onChangeSearchText, searchText }) {
  return (
    <input
      data-testid="filterInput"
      className="large"
      placeholder="Enter Country Name"
      value={searchText}
      onChange={onChangeSearchText}
    />
  );
}

export default Search;
