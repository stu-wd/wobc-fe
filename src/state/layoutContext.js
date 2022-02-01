import React, { createContext, useContext, useState } from "react";

const LayoutContext = createContext({});

const LayoutProvider = (props) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const toggleOpenEditModal = (bike) => {
    setEditingBike(bike);
    setIsEditModalOpen(!isEditModalOpen);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const [editingBike, setEditingBike] = useState();

  const layoutContextValue = {
    toggleSidebar,
    openSidebar,
    isEditModalOpen,
    setIsEditModalOpen,
    toggleOpenEditModal,
    editingBike,
    setEditingBike,
  };

  return <LayoutContext.Provider value={layoutContextValue} {...props} />;
};

const useLayout = () => useContext(LayoutContext);

export { LayoutProvider, useLayout };
