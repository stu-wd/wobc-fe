import React, { createContext, useContext, useState } from "react";

const LayoutContext = createContext({});

const LayoutProvider = (props) => {
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
  };

  return <LayoutContext.Provider value={layoutContextValue} {...props} />;
};

const useLayout = () => useContext(LayoutContext);

export { LayoutProvider, useLayout };
