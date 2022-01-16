import React, { useEffect, useState } from "react";
import { useBikes } from "../../../Contexts/bikes.context";
import { useAuth } from "../../../Contexts/auth.context";
import { BiSearchAlt } from "react-icons/bi";
import BikeForm from "../BikeForm";

const SearchBike = () => {
  const { getBikes, searchSerial, searchResults } = useBikes();
  const { user } = useAuth();

  useEffect(() => {
    searchResults.value = undefined;
    getBikes();
  }, []);

  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search === "" || undefined) return;
    searchSerial(search.toUpperCase());
  };

  return (
    <>
      <div className="mt-4 relative">
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <div
          onClick={handleSearch}
          className="absolute right-1 top-2 cursor-pointer"
        >
          <BiSearchAlt size={28} />
        </div>
      </div>

      {searchResults.value && searchResults.value.length === 0 && (
        <>No results</>
      )}

      {searchResults.value &&
        searchResults.value.map((match) => {
          return (
            <BikeForm
              match={match}
              edit={true}
              key={match}
              // delete={
              //   user.username === "blake" || user.username === "jerry"
              //     ? true
              //     : false
              // }
              delete={true}
            />
          );
        })}
    </>
  );
};

export default SearchBike;
