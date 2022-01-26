import React from "react";
import MyBikeForm from "../MyBikeForm";
import { useBikeForm } from "../../../state/Bikes/bikeFormContext";
import { useBikes } from "../../../state/bikesContext";
import { initialValues } from "../../form/data/formData";

const AddBike = () => {
  const { search, setSearch } = useBikeForm();
  const { postBike, postMsg } = useBikes();
  const startingValues = initialValues;

  const validate = () => {};

  const addSubmit = (values, { resetForm, setSubmitting }) => {
    values.serial = values.serial.toUpperCase();
    let submission = {
      ...values,
      status: search.status,
      brand: search.brand,
      size: search.size,
      storage: search.storage,
      received: search.storage,
    };
    postBike(submission)
      .then((res) => {
        if (res.message === "Add Success") {
          resetForm({
            values: startingValues,
          });
          setSearch({
            status: "",
            brand: "",
            size: "",
            storage: "",
            received: "",
          });
        }
      })
      .catch((err) => {
        console.log("here");
      });
  };

  return (
    <>
      <MyBikeForm
        buttonText="Add bike"
        startingValues={startingValues}
        myValidationSchema={validate}
        addSubmit={addSubmit}
      />
      {postMsg.value != undefined && postMsg.value.message}
    </>
  );
};

export default AddBike;
