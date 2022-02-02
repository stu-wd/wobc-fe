import React, { createContext, useContext, useState } from "react";

const LayoutContext = createContext({});

const LayoutProvider = (props) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleSelectedBike = (bike) => {
    setEditingBike(bike);
    setIsEditModalOpen(true);
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
  };

  return <LayoutContext.Provider value={layoutContextValue} {...props} />;
};

const useLayout = () => useContext(LayoutContext);

export { LayoutProvider, useLayout };
