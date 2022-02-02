import React, { useEffect } from "react";
import MyBikeForm from "../MyBikeForm";
import { useLayout } from "../../../state/layoutContext";
import { useBikes } from "../../../state/bikesContext";
import MyModal from "./MyModal";

const Delete = () => {
  const {
    isDeleteModalOpen,
    editingBike,
    closeEditModal,
    setIsDeleteModalOpen,
  } = useLayout();
  const { deleteAttempt, deleteBike } = useBikes();

  const validate = () => {};

  const onDeleteSubmit = (serial) => {
    deleteBike(serial)
      .then(() => {
        setIsDeleteModalOpen(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <MyModal
      onClickAction={onDeleteSubmit}
      bikeInfo={editingBike ? editingBike.serial : ""}
      buttonText="Delete"
      close={closeEditModal}
      open={isDeleteModalOpen}
    />
  );
};

export default Delete;
