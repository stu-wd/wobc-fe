import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  BiSearchAlt as Search,
  BiMessageRoundedAdd as Add,
  BiWrench as Edit,
  BiLeftArrowCircle as Collapse,
  BiRightArrowCircle as Expand,
  BiLogOut as LogoutIcon,
} from "react-icons/bi";
import { useLayout } from "../state/layoutContext";
import { Link } from "react-router-dom";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { capitalize } from "../utils/capitalize";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useLayout();

  const MyListItem = ({ icon, text }) => {
    return (
      <Link onClick={toggleSidebar} to={`${text}`}>
        <ListItem button key={text}>
          <ListItemIcon>
            {icon}
            <ListItemText primary={capitalize(text)} />
          </ListItemIcon>
        </ListItem>
      </Link>
    );
  };

  const list = (
    <>
      <Box
        role="presentation"
        className="h-screen mt-14 border-[1px] border-grey bg-white w-48"
      >
        <List>
          <MyListItem text="dashboard" icon={<Edit size="20" />} />
          <MyListItem text="add" icon={<Add size="20" />} />
          <MyListItem text="search" icon={<Search size="20" />} />
          <MyListItem text="filter" icon={<ManageSearchIcon size="20" />} />
        </List>
        <Divider />
        <List>
          <Link to="/logout">
            <MyListItem text="logout" icon={<LogoutIcon size="20" />} />
          </Link>
        </List>
      </Box>
    </>
  );

  return (
    <Box component="nav">
      <Drawer
        className=""
        anchor="left"
        open={isSidebarOpen}
        onClose={toggleSidebar}
      >
        {list}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
