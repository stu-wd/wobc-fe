import React, { useState } from "react";
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
import { useAuth } from "../state/authContext";

const Header = () => {
  const { toggleSidebar } = useAuth();
  const [openSearchBar, setOpenSearchBar] = useState(false);

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
    <Box className="header">
      <HeaderIcon onClick={toggleSidebar} icon={<MenuBars size="20" />} />
      <HeaderIcon onClick={toggleSearchBar} icon={<Search size="20" />} />
      {openSearchBar ? (
        <HeaderSearch type="text" placeholder="Search by serial" />
      ) : null}
    </Box>
  );
};

export default Header;
