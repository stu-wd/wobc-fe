// import React, { useEffect } from "react";
// import { Input, Space } from "antd";
// // import { useBikes } from "../../../../Contexts/bikes.context";
// import { useBikes } from "../../../Contexts/bikes.context";
// import BikeCard from "../BikeCard";
// import BikeActions from "./BikeActions";
// // import BikeCard from "../BikeCard";
// // import BikeActions from "./BikeActions";

// const SearchBike = () => {
//   const { Search } = Input;
//   const {
//     handleSerialSearch,
//     searchedBikeBySerial,
//     searchSerial,
//     serialSearchDetails,
//   } = useBikes();

//   const onSearch = (serial) => {
//     if (serial.length === 0) {
//       alert("must enter serial");
//     } else {
//       searchSerial(serial);
//     }
//   };

//   return (
//     <>
//       <Space direction="vertical">
//         <Search
//           placeholder="search by serial"
//           onSearch={onSearch}
//           style={{ width: 200 }}
//         />
//       </Space>

//       {serialSearchDetails.value ? (
//         serialSearchDetails.value.map((match) => {
//           return (
//             <>
//               <BikeActions key={match} serialMatch={match} />
//             </>
//           );
//         })
//       ) : (
//         <></>
//       )}
//     </>
//   );
// };

// export default SearchBike;

import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";
import { useBikes } from "../../../Contexts/bikes.context";
import { BiSearchAlt } from "react-icons/bi";
import BikeCard from "../BikeCard";

const SearchBike = () => {
  const { getBikes, bikes, searchSerial, searchResults } = useBikes();
  console.log(searchResults);

  useEffect(() => {
    getBikes();
  }, []);

  const [search, setSearch] = useState("");

  const handleSearch = () => {
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

      {searchResults.value &&
        searchResults.value.map((match) => {
          return <BikeCard bike={match} />;
        })}
    </>
  );
};

export default SearchBike;
