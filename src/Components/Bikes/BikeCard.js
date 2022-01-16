import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useBikes } from "../../Contexts/bikes.context";

const BikeCard = (props) => {
  const { searchResults } = useBikes();
  const { brand, condition, status, type, serial, size, user_id } = props.bike;
  return (
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h5>{status}</h5>
      <h5>{condition}</h5>
      <h5>{serial}</h5>
      <h5>{size}</h5>
      <h5>{brand}</h5>
      <h5>{user_id}</h5>
      <h5>{type}</h5>
      <div>
        <button>
          <Link to="/edit">Edit</Link>
        </button>
      </div>
    </div>
  );
};

export default BikeCard;
