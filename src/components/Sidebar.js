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
} from "react-icons/bi";
// import { useAuth } from "../state/authContext";
import { useLayout } from "../state/layoutContext";
import { Link } from "react-router-dom";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { capitalize } from "../utils/capitalize";

const Sidebar = () => {
  const { openSidebar, toggleSidebar } = useLayout();

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
        className="h-screen border-2 border-grey bg-white w-48"
      >
        <List>
          <MyListItem text="dashboard" icon={<Edit size="20" />} />
          <MyListItem text="add" icon={<Add size="20" />} />
          <MyListItem text="search" icon={<Search size="20" />} />
          <MyListItem text="filter" icon={<ManageSearchIcon size="20" />} />
        </List>
        <Divider />
      </Box>
    </>
  );

  return (
    <Box component="nav">
      <Drawer
        className=""
        anchor="left"
        open={openSidebar}
        onClose={toggleSidebar}
      >
        {list}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
