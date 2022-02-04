import React, { useEffect } from "react";
import {
  RiDashboardLine as Dashboard,
  RiLogoutBoxRLine as Logout,
  RiMenuLine as MenuBars,
} from "react-icons/ri";
import { Box } from "@mui/material";
import { useLayout } from "../state/layoutContext";
import Search from "./bikes/actions/Search";

const Header = () => {
  const {
    toggleSidebar,
    isHeaderVisible,
    isSidebarOpen,
    oldScroll,
    handleScroll,
  } = useLayout();

  // const toggleSearchBar = () => {
  //   setOpenSearchBar(!openSearchBar);
  // };

  const HeaderIcon = ({ icon, onClick }) => (
    <div
      onClick={onClick}
      className={`header-icon ${isSidebarOpen ? "rounded-xl" : "rounded-3xl"}`}
    >
      {icon}
    </div>
  );

  const HeaderSearch = ({ type, placeholder }) => (
    <Search type={type} placeholder={placeholder} />
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [oldScroll, isHeaderVisible, handleScroll]);

  return (
    <Box
      component="header"
      className={`header ${isHeaderVisible ? "top-[0]" : "top-[-115px]"}`}
    >
      <HeaderIcon onClick={toggleSidebar} icon={<MenuBars size="20" />} />
      {/* <HeaderIcon onClick={toggleSearchBar} icon={<SearchIcon size="20" />} />
      {openSearchBar ? <HeaderSearch /> : null} */}
    </Box>
  );
};

export default Header;
