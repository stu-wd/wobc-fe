import React from "react";
import { Button, Modal } from "@mui/material";
import { Box } from "@mui/system";

const MyModal = ({
  onClickAction,
  bikeInfo,
  buttonText,
  close,
  open,
  ...props
}) => {
  return (
    <Modal open={open} onClose={close} onBackdropClick={close}>
      <Box className="absolute top-[2%] left-[10%] w-[80%] border-2 border-black bg-white p-4">
        <Button
          variant="contained"
          fullWidth
          color={buttonText === "Delete" ? "error" : ""}
          onClick={() => onClickAction(bikeInfo)}
        >
          {buttonText}
        </Button>
      </Box>
    </Modal>
  );
};

export default MyModal;
