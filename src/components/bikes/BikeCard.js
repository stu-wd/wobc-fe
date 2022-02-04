import React from "react";
import { useLayout } from "../../state/layoutContext";
import { Button } from "@mui/material";
const BikeCard = ({ match, ...props }) => {
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
  } = match;

  const { handleSelectedBike } = useLayout();
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

      <div className="flex mt-1">
        <Button
          variant="contained"
          fullWidth
          onClick={(event) =>
            handleSelectedBike(event.target.textContent, match)
          }
          style={{ marginRight: "0.25rem" }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          fullWidth
          color="error"
          onClick={(event) =>
            handleSelectedBike(event.target.textContent, match)
          }
          style={{ marginLeft: "0.25rem" }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
export default BikeCard;
