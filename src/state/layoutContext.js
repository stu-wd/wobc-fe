import React, { createContext, useContext, useState } from "react";

const LayoutContext = createContext({});

const LayoutProvider = (props) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const layoutContextValue = {
    toggleSidebar,
    openSidebar,
  };

  return <LayoutContext.Provider value={layoutContextValue} {...props} />;
};

const useLayout = () => useContext(LayoutContext);

export { LayoutProvider, useLayout };
