import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = ({city, handleSearch}) => {


  return (
    <form>
      <div className="form-group mb-0">
        <input
          type="text"
          ref={city}
          className="form-control"
          placeholder="Search..."
        />
      </div>
      <CiSearch className="search" onClick={() => handleSearch()} />
    </form>
  );
};

export default Search;
