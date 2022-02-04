import React from "react";
import MyBikeForm from "../MyBikeForm";
import { useBikes } from "../../../state/bikesContext";
import { initialValues } from "../../form/data/formData";

const AddBike = () => {
  const { postBike, postAttempt } = useBikes();
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
      {postAttempt.value != undefined && postAttempt.value.message}
    </>
  );
};

export default AddBike;
