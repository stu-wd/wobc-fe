import React, { useState } from "react";
import { Menu, Button, Layout } from "antd";
import { Link } from "react-router-dom";
import {
  BiSearchAlt as Search,
  BiMessageRoundedAdd as Add,
  BiWrench as Edit,
} from "react-icons/bi";
import {
  RiDashboardLine as Dashboard,
  RiLogoutBoxRLine as Logout,
} from "react-icons/ri";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Menu
      className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg"
      // defaultSelectedKeys={["1"]}
      // defaultOpenKeys={["sub1"]}
      mode="inline"
      // theme="dark"
      inlineCollapsed={collapsed}
    >
      <SidebarIcon icon={<Add size="28" />} text="Add" />
      <SidebarIcon icon={<Dashboard size="28" />} text="Dashboard" />
      <SidebarIcon icon={<Search size="28" />} text="Search" />
      <SidebarIcon icon={<Logout size="28" />} text="Logout" />
    </Menu>
  );
};

const SidebarIcon = ({ icon, text = "" }) => (
  <Link to={`/${text}`}>
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  </Link>
);

export default Sidebar;
