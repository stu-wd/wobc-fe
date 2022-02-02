import { Modal } from "@mui/material";
import React from "react";
import MyBikeForm from "../MyBikeForm";
import { useLayout } from "../../../state/layoutContext";
import { Box } from "@mui/system";
import { useBikes } from "../../../state/bikesContext";

const Delete = () => {
  const { isDeleteModalOpen, editingBike, closeEditModal } = useLayout();
  const { deleteAttempt, deleteBike } = useBikes();

  const validate = () => {};

  const onDeleteSubmit = (values) => {
    deleteBike(values.serial.toUpperCase());
  };
  return (
    <Modal
      open={isDeleteModalOpen}
      // onClose={closeEditModal}
      onBackdropClick={closeEditModal}
    >
      <Box className="absolute top-[10%] left-[10%] w-[80%] border-2 border-black bg-white p-4">
        Delete attempt card?
        {deleteAttempt.value != undefined && deleteAttempt.value.message}
      </Box>
    </Modal>
  );
};

export default Delete;
