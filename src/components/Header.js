import React, { useState, useEffect } from "react";
// import { Menu, Button, Layout } from "antd";
import { Link } from "react-router-dom";
import {
  BiSearchAlt as Search,
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
    <div className="max-w-[40%]">
      <input type={type} placeholder={placeholder} />
    </div>
  );

  return (
    <Box
      component="header"
      className={`header ${showHeader ? "top-[0]" : "top-[-115px]"}`}
    >
      <HeaderIcon onClick={toggleSidebar} icon={<MenuBars size="20" />} />
      <HeaderIcon onClick={toggleSearchBar} icon={<Search size="20" />} />
      {openSearchBar ? (
        <HeaderSearch type="text" placeholder="Maybe one day..." />
      ) : null}
    </Box>
  );
};

export default Header;
