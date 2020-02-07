import React from 'react';

import DrawerList from './DrawerList';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const useDrawerStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function DrawerNav(props) {
  const { container } = props;
  const classes = useDrawerStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const DrawerAppBar = () => {
    return (
      <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
              <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
              >
                  <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                  Alexander Steele
              </Typography>
          </Toolbar>
      </AppBar>
  )}

    const MobileDrawer = () => (
        <Hidden smUp implementation="css">
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{paper: classes.drawerPaper}}
                ModalProps={{keepMounted: true,}}
            >
                <DrawerList />
            </Drawer>
        </Hidden>
    )

  const FixedDrawer = () => (
    <Hidden xsDown implementation="css">
        <Drawer
            classes={{paper: classes.drawerPaper}}
            variant="permanent"
            open
        >
            <DrawerList />
        </Drawer>
    </Hidden>
  )

  return (
    <div className={classes.root}>
      <CssBaseline />
      <DrawerAppBar />

      <nav className={classes.drawer}>
        <MobileDrawer />
        <FixedDrawer />
      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar} />
            {props.contentComponent }
      </main>
    </div>
  );
}

export default DrawerNav;
