import React, { useState, useEffect } from "react";
// import { Menu, Button, Layout } from "antd";
import { Link } from "react-router-dom";
import {
  BiSearchAlt as SearchIcon,
  BiMessageRoundedAdd as Add,
  BiWrench as Edit,
  BiLeftArrowCircle as Collapse,
  BiRightArrowCircle as Expand,
} from "react-icons/bi";
import {
  RiDashboardLine as Dashboard,
  RiLogoutBoxRLine as Logout,
  RiMenuLine as MenuBars,
} from "react-icons/ri";
import { Box } from "@mui/material";
// import { useAuth } from "../state/authContext";
import { useLayout } from "../state/layoutContext";
import { debounce } from "../utils/debounce";
import Search from "./bikes/Actions/Search";

const Header = () => {
  const { toggleSidebar } = useLayout();
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [oldScroll, setOldScroll] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  const handleScroll = debounce(() => {
    const scrollPos = window.scrollY;
    setShowHeader(oldScroll > scrollPos || scrollPos < 50);
    setOldScroll(scrollPos);
  }, 25);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [oldScroll, showHeader, handleScroll]);

  const toggleSearchBar = () => {
    setOpenSearchBar(!openSearchBar);
  };

  const HeaderIcon = ({ icon, onClick }) => (
    <div onClick={onClick} className={`header-icon`}>
      {icon}
    </div>
  );

  const HeaderSearch = ({ type, placeholder }) => (
    <Search type={type} placeholder={placeholder} />
  );

  return (
    <Box
      component="header"
      className={`header ${showHeader ? "top-[0]" : "top-[-115px]"}`}
    >
      <HeaderIcon onClick={toggleSidebar} icon={<MenuBars size="20" />} />
      {/* <HeaderIcon onClick={toggleSearchBar} icon={<SearchIcon size="20" />} />
      {openSearchBar ? <HeaderSearch /> : null} */}
    </Box>
  );
};

export default Header;
