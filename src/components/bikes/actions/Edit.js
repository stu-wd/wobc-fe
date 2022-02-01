import { Modal } from "@mui/material";
import React from "react";
import MyBikeForm from "../MyBikeForm";
import { useLayout } from "../../../state/layoutContext";
import { Box } from "@mui/system";
import { useBikes } from "../../../state/bikesContext";

// const style = {
//   position: "absolute",
//   top: "25%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "80%",
//   border: "2px solid #000",
//   bgcolor: "white",
//   boxShadow: 24,
//   p: 4,
// };

const Edit = (props) => {
  const {
    isEditModalOpen,
    setIsEditModalOpen,
    toggleOpenEditModal,
    editingBike,
    closeEditModal,
  } = useLayout();
  const { editBike } = useBikes();

  const validate = () => {};

  const onEditSubmit = (values) => {
    editBike(values);
  };
  return (
    <Modal open={isEditModalOpen} onClose={closeEditModal}>
      <Box className="absolute top-[10%] left-[10%] w-[80%] border-2 border-black bg-white p-4">
        <MyBikeForm
          buttonText={`Save edit`}
          startingValues={editingBike}
          validate={validate}
          onSubmit={onEditSubmit}
        />
      </Box>
    </Modal>
  );
};

export default Edit;
