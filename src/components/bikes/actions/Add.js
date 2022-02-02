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
    postBike(values)
      .then((res) => {
        if (res.message === "Add Success") {
          resetForm({
            values: startingValues,
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
        validate={validate}
        onSubmit={addSubmit}
      />
      {postMsg.value != undefined && postMsg.value.message}
    </>
  );
};

export default AddBike;
