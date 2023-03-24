import React,{useState,useEffect} from "react";
import { FaSistrix } from "react-icons/fa";
import './Search.css'

const Search = ({handleCityQuery}) => {
     const [searchTerm, setSearchTerm] = useState("");
     const [query, setQuery] = useState("");

       const handleOnChange = (e) => {
         setSearchTerm(e.target.value);
       };

       const updateQuery = (e) => {
         e.preventDefault();
         setQuery(searchTerm);
         handleCityQuery(query);
       };

       
  return (
    <div class="search container d-flex justify-content-center">
      <div class="input-group mb-7">
        <input
          value={searchTerm}
          onChange={handleOnChange}
          type="text"
          class="form-control"
          placeholder="Search for city"
        />
        <div class="input-group-append">
          <button class="btn" onClick={updateQuery}>
            <FaSistrix />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
