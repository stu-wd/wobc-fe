import React, { createContext, useContext, useState } from "react";
import { useBikes } from "./bikesContext";

const LayoutContext = createContext({});

const LayoutProvider = (props) => {
  const { deleteAttempt } = useBikes();
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  const handleSelectedBike = (action, bike) => {
    if (deleteAttempt && deleteAttempt.value) {
      deleteAttempt.value = null;
    }

    setEditingBike(bike);
    if (action === "Edit") {
      setIsEditModalOpen(true);
    }
    if (action === "Delete") {
      setIsDeleteModalOpen(true);
    }
  };

  const [editingBike, setEditingBike] = useState();

  const layoutContextValue = {
    toggleSidebar,
    openSidebar,
    isEditModalOpen,
    setIsEditModalOpen,
    editingBike,
    setEditingBike,
    closeEditModal,
    handleSelectedBike,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
  };

  return <LayoutContext.Provider value={layoutContextValue} {...props} />;
};

const useLayout = () => useContext(LayoutContext);

export { LayoutProvider, useLayout };
