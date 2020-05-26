import React from 'react';
import { useHistory } from 'react-router';

import SchoolIcon from '@material-ui/icons/School';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import GitHubIcon from '@material-ui/icons/GitHub';
import useDrawerStyles from './useDrawerStyles';
import Divider from '@material-ui/core/Divider';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import WorkIcon from '@material-ui/icons/Work';
import ChatIcon from '@material-ui/icons/Chat';

    

const DrawerList = () => {

    const classes = useDrawerStyles();
    let history = useHistory();

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

    return (
        <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
            {['About','Projects', 'Demos'].map((text, index) => (
                
            <ListItem button key={text}  onClick={() => handleItemClick(text)}
                selected={handleItemActive(text)}>
                <ListItemIcon>
                    <div>
                        {index === 0 && <PersonIcon />}
                        {index === 1 && <GitHubIcon />}
                        {index === 2 && <PlayCircleFilledIcon />}
                    </div>
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {['Experience', 'Education', 'Awards'].map((text, index) => (
            <ListItem button key={text} onClick={() => handleItemClick(text)}
                selected={handleItemActive(text)}>
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
        <Divider />
        <List>
            {['Blog'].map((text, index) => (
            <ListItem button key={text} onClick={() => handleItemClick(text)}
                selected={handleItemActive(text)}>
                <ListItemIcon>
                    <div>
                        {index === 0 && <ChatIcon />}
                    </div>  
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
        </div>
    )
};

export default DrawerList;