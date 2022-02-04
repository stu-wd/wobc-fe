import React, { createContext, useContext, useState } from "react";
import { useBikes } from "./bikesContext";

const LayoutContext = createContext({});

const LayoutProvider = (props) => {
  const { deleteAttempt } = useBikes();
  const [isSidebarOpen, setsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setsSidebarOpen(!isSidebarOpen);
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

  const [showChoices, setShowChoices] = useState({
    status: false,
    style: false,
    gender: false,
    adultchild: false,
    size: false,
    storage: false,
    received: false,
  });

  const toggleShowChoices = (category) => {
    setShowChoices({
      ...showChoices,
      [category]: !showChoices[category],
    });
  };

  const layoutContextValue = {
    toggleSidebar,
    isSidebarOpen,
    isEditModalOpen,
    setIsEditModalOpen,
    editingBike,
    setEditingBike,
    closeEditModal,
    handleSelectedBike,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    showChoices,
    toggleShowChoices,
  };

  return <LayoutContext.Provider value={layoutContextValue} {...props} />;
};

const useLayout = () => useContext(LayoutContext);

export { LayoutProvider, useLayout };
