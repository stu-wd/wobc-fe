import React, { useState } from "react";
import { Menu, Button, Layout } from "antd";
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
} from "react-icons/ri";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
    console.log(collapsed);
  };

  const SidebarAction = ({ icon, text = "" }) => (
    <div onClick={onCollapse} className={`sidebar-icon sidebar-collapse group`}>
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );

  const SidebarIcon = ({ icon, text = "" }) => (
    <Link to={`/${text.toLowerCase()}`}>
      <div className={`sidebar-icon group`}>
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
      </div>
    </Link>
  );

  return (
    <Menu
      className={`sidebar ${
        collapsed ? "hidden transition-all duration-100 ease-in" : ""
      }`}
      // defaultSelectedKeys={["1"]}
      // defaultOpenKeys={["sub1"]}
      mode="inline"
      // theme="dark"
      inlineCollapsed={collapsed}
    >
      <SidebarIcon icon={<Add size="20" />} text="Add" />
      <SidebarIcon icon={<Dashboard size="20" />} text="Dashboard" />
      <SidebarIcon icon={<Search size="20" />} text="Search" />
      <SidebarIcon icon={<Logout size="20" />} text="Logout" />
      {/* {collapsed ? (
        <SidebarAction icon={<Collapse size="20" />} text="Collapse" />
      ) : (
        <SidebarAction icon={<Expand size="20" />} text="Collapse" />
      )} */}
    </Menu>
  );
};

export default Sidebar;
