import React, { createContext, useContext, useState } from "react";

const LayoutContext = createContext({});

const LayoutProvider = (props) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const [openEditModal, setOpenEditModal] = useState(false);

  const toggleOpenEditModal = () => {
    setOpenEditModal(!openEditModal);
  };

  const layoutContextValue = {
    toggleSidebar,
    openSidebar,
    openEditModal,
    setOpenEditModal,
    toggleOpenEditModal,
  };

  return <LayoutContext.Provider value={layoutContextValue} {...props} />;
};

const useLayout = () => useContext(LayoutContext);

export { LayoutProvider, useLayout };
