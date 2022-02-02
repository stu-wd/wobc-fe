import React from "react";
import { Modal } from "@mui/material";
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
        <button className="button" onClick={() => onClickAction(bikeInfo)}>
          {buttonText}
        </button>
      </Box>
    </Modal>
  );
};

export default MyModal;
