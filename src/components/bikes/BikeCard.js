import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useBikes } from "../../state/bikesContext";

const BikeCard = (props) => {
  const { brand, status, style, serial, size, storage, wobc_id } = props.match;
  return (
    <div
      style={{
        border: "2px solid black",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h5>serial: {serial}</h5>
      <h5>wobc_id: {wobc_id}</h5>
      <h5>status: {status}</h5>
      <h5>size: {size}</h5>
      <h5>brand: {brand}</h5>
      <h5>style: {style}</h5>
      <h5>storage: {storage}</h5>
    </div>
  );
};
export default BikeCard;
