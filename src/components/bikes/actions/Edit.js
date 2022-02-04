import { Modal } from "@mui/material";
import React from "react";
import MyBikeForm from "../MyBikeForm";
import { useLayout } from "../../../state/layoutContext";
import { useBikes } from "../../../state/bikesContext";
import MyModal from "../MyModal";

const Edit = () => {
  const { isEditModalOpen, editingBike, closeEditModal } = useLayout();
  const { editBike, putAttempt } = useBikes();

  const validate = () => {};

  const onEditSubmit = (values) => {
    editBike(values)
      .then((res) => {
        console.log(res);
        if (res.message === "Edit Success") {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <MyModal
      bikeInfo={editingBike ? editingBike.serial : ""}
      close={closeEditModal}
      open={isEditModalOpen}
      content={
        <MyBikeForm
          buttonText={`Save edit`}
          startingValues={editingBike}
          // validate={validate}
          onSubmit={onEditSubmit}
        />
      }
    />
  );
};

export default Edit;
