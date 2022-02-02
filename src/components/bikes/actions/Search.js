import React, { useState } from "react";
import { useBikes } from "../../../state/bikesContext";
import { BiSearchAlt as SearchIcon } from "react-icons/bi";
import { TextField } from "@mui/material";

import BikeCard from "../BikeCard";
import Edit from "./Edit";

const Search = () => {
  const { searchSerial, searchResults, putMsg } = useBikes();

  const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      <div className="relative">
        <TextField
          name="searchInput"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          fullWidth
          placeholder="Search by serial"
        />
        <div
          className="cursor-pointer"
          onClick={() => searchSerial(searchInput.toUpperCase())}
        >
          <SearchIcon size="30" className="absolute right-3 top-3" />
        </div>
      </div>
      {searchResults.value != undefined &&
        searchResults.value.map((match, i) => {
          return <BikeCard match={match} key={i} />;
        })}

      <Edit />
    </div>
  );
};

export default Search;
