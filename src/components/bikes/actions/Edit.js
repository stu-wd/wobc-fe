import { Modal } from "@mui/material";
import React from "react";
import MyBikeForm from "../MyBikeForm";
import { useLayout } from "../../../state/layoutContext";
import { Box } from "@mui/system";
import { useBikes } from "../../../state/bikesContext";

const Edit = () => {
  const { isEditModalOpen, editingBike, closeEditModal } = useLayout();
  const { editBike, putMsg } = useBikes();

  const validate = () => {};

  const onEditSubmit = (values) => {
    editBike(values);
  };
  return (
    <Modal
      open={isEditModalOpen}
      // onClose={closeEditModal}
      onBackdropClick={closeEditModal}
    >
      <Box className="absolute top-[10%] left-[10%] w-[80%] border-2 border-black bg-white p-4">
        <MyBikeForm
          buttonText={`Save edit`}
          startingValues={editingBike}
          validate={validate}
          onSubmit={onEditSubmit}
        />
        {putMsg.value != undefined && putMsg.value.message}
      </Box>
    </Modal>
  );
};

export default Edit;
