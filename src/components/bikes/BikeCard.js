import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLayout } from "../../state/layoutContext";
import Edit from "./actions/Edit";
const BikeCard = (props) => {
  const {
    brand,
    status,
    style,
    serial,
    size,
    storage,
    wobc_id,
    gender,
    adultchild,
  } = props.match;

  const {
    setIsEditModalOpen,
    toggleOpenEditModal,
    setEditingBike,
    handleSelectedBike,
  } = useLayout();
  return (
    <div className="border-[1px] border-grey p-2 mb-2 mt-4">
      <h5>serial: {serial}</h5>
      <h5>wobc_id: {wobc_id}</h5>
      <h5>status: {status}</h5>
      <h5>gender: {gender}</h5>
      <h5>adultchild: {adultchild}</h5>
      <h5>size: {size}</h5>
      <h5>brand: {brand}</h5>
      <h5>style: {style}</h5>
      <h5>storage: {storage}</h5>

      <div className="flex flex-row mt-1">
        <button
          onClick={() => handleSelectedBike(props.match)}
          className="button mx-1"
        >
          Edit
        </button>
        <button className="button mx-1 bg-red-light">Delete</button>
      </div>
    </div>
  );
};
export default BikeCard;
