import React from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import Home from "@material-ui/icons/Home";
import Description from "@material-ui/icons/Description";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <Drawer variant="permanent">
      <IconButton>
        <span>Menu</span>
      </IconButton>
      <List >
        <NavLink to={'/'} exact>
          <ListItem button >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home"/>
          </ListItem>
        </NavLink>
        <NavLink to={'/curriculum'} exact>
          <ListItem button>
            <ListItemIcon>
              <Description />
            </ListItemIcon>
            <ListItemText primary="Currículo" />
          </ListItem>
        </NavLink>
      </List>
    </Drawer>
  );
};

export default Menu;
