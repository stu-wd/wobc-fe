import React, { useEffect, useState } from "react";
import { useBikes } from "../../../state/bikesContext";
import { BiSearchAlt as SearchIcon } from "react-icons/bi";
import { TextField } from "@mui/material";

import BikeCard from "../BikeCard";
import Edit from "./Edit";
import { useLayout } from "../../../state/layoutContext";

const Search = () => {
  const { searchSerial, searchResults, putMsg } = useBikes();
  const { isEditModalOpen } = useLayout();

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (!isEditModalOpen) {
      searchSerial(searchInput.toUpperCase());
    }
  }, [isEditModalOpen]);

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
