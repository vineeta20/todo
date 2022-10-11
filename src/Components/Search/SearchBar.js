import React from "react";
import style from "./Search.module.css";
const SearchBar = ({ searchInput, setSearchInput }) => {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className={style.searchbar}>
      <input
        type="text"
        placeholder="Search here..."
        value={searchInput}
        onChange={handleChange}
      />
      {/* <button className={style.search}>Search</button> */}
    </div>
  );
};

export default SearchBar;
