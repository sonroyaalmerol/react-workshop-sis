import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
  useHistory,
} from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SidebarButton(props) {
  const classes = useStyles();
  const history = useHistory();

  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const DrawerList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button onClick={() => history.push('/subjects')}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="My Subjects" />
        </ListItem>
        <ListItem button onClick={() => history.push('/grades')}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="My Grades" />
        </ListItem>
        <ListItem button onClick={() => history.push('/curriculum')}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="My Curriculum" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => history.push('/')}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Log In" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton 
        {...props}
        edge="start"
        color="inherit" 
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
        <DrawerList />
      </Drawer>
    </div>
  );
}
