import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import SchoolIcon from '@material-ui/icons/School';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import FolderIcon from '@material-ui/icons/Folder';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import WorkIcon from '@material-ui/icons/Work'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useDrawerStyles from './useDrawerStyles';
import {useTheme} from '@material-ui/core/styles';
import { useHistory } from 'react-router';


function DrawerNav(props) {
  const { container } = props;
  const classes = useDrawerStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let history = useHistory();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleItemClick = (text) => {
    text === 'About' ? history.push('/') : history.push('/' + text)
  }

  const handleItemActive = (text) => {   
    if (text === 'About') {
        return `/` === history.location.pathname;
    } else {
        return `/${text}` === history.location.pathname;
    }
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['About','Projects'].map((text, index) => (
            
          <ListItem button key={text}  onClick={() => handleItemClick(text)}
            selected={handleItemActive(text)}>
            <ListItemIcon>
                <div>
                    {index === 0 && <PersonIcon />}
                    {index === 1 && <FolderIcon />}
                </div>
                
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Experience', 'Education', 'Awards'].map((text, index) => (
          <ListItem button key={text} onClick={() => handleItemClick(text)}>
            <ListItemIcon>
                <div>
                    {index === 0 && <WorkIcon />}
                    {index === 1 && <SchoolIcon />}
                    {index === 2 && <ThumbUpIcon />}
                </div>
                
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
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

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{keepMounted: true,}}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
            {props.contentComponent }
      </main>
    </div>
  );
}

export default DrawerNav;
