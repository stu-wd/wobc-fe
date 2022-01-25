import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
import { useAuth } from "../state/authContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { openSidebar, toggleSidebar } = useAuth();

  const MyListItem = ({ icon, text }) => {
    return (
      <Link onClick={toggleSidebar} to={`${text}`}>
        <ListItem button key={text}>
          <ListItemIcon>
            {icon}
            <ListItemText primary={text} />
          </ListItemIcon>
        </ListItem>
      </Link>
    );
  };

  const list = (
    <>
      <Box
        role="presentation"
        className="h-screen w-fit border-2 border-grey bg-white"
      >
        <List>
          <MyListItem text="Dashboard" icon={<Edit size="20" />} />
          <MyListItem text="Add" icon={<Add size="20" />} />
        </List>
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
