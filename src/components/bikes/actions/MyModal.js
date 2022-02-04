import React from "react";
import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";

const MyModal = ({
  onClickAction,
  bikeInfo,
  buttonText,
  close,
  open,
  content,
  ...props
}) => {
  return (
    <Modal
      open={open}
      onClose={close}
      onBackdropClick={close}
      className="w-[80%] min-h-screen overflow-scroll flex justify-center m-auto p-4"
    >
      <Box className="border-2 border-black bg-white p-4 overflow-scroll">
        {content}
        {buttonText === "Delete" && (
          <Button
            variant="contained"
            fullWidth
            color="error"
            onClick={() => onClickAction(bikeInfo)}
          >
            {buttonText}
          </Button>
        )}
      </Box>
    </Modal>
  );
};

export default MyModal;
