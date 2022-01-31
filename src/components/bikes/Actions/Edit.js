import React from "react";
import MyBikeForm from "../MyBikeForm";

const Edit = () => {
  const startingValues = {};

  const validate = () => {};

  const editBike = () => {};
  return (
    <div>
      <MyBikeForm
        buttonText="Edit Bike"
        startingValues={startingValues}
        validate={validate}
        onSubmit={editBike}
      />
    </div>
  );
};

export default Edit;
