import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckroomRoundedIcon from "@mui/icons-material/CheckroomRounded";
import EventIcon from "@mui/icons-material/Event";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LogoutIcon from "@mui/icons-material/Logout";
import StarIcon from "@mui/icons-material/Star";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { useContext } from "react";
import { Link } from "react-router-dom";
import Star from "@mui/icons-material/Star";

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",

  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;

  const categories = [
    {
      id: "Sections",
      children: [
        {
          id: "Weekly Plan",
          icon: <EventIcon />,
          active: false,
          hrefo: "/home/week",
        },
        {
          id: "Wardrobe",
          icon: <CheckroomRoundedIcon />,
          hrefo: "/home/wardrobe",
        },
        {
          id: "Saved Outfits",
          icon: <StarIcon />,
          hrefo: "/home/saved",
          id: "Shopping",
          icon: <ShoppingBagOutlinedIcon />,
          hrefo: "/home/shopping",
        },
        /*{
          id: "Random Outfit Generator",
          icon: <AutoFixHighIcon />,
          hrefo: "/home/r",
        },
        { id: "Shopping", icon: <ShoppingBagIcon />, hrefo: "/shopping" },
        */
      ],
    },
    {
      id: "",
      children: [
        { id: "Settings", icon: <SettingsIcon />, hrefo: "/home/settings" },
        { id: "Logout", icon: <LogoutIcon />, hrefo: "/logout" },
      ],
    },
  ];

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
        >
          Dressense
        </ListItem>
        <ListItem
          sx={{ ...item, ...itemCategory }}
          button
          component={Link}
          to="/home"
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Main Dashboard</ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#101F33" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, hrefo }) => (
              <Link style={{ textDecoration: "none" }} to={hrefo}>
                <ListItem disablePadding key={childId}>
                  <ListItemButton selected={active} sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
