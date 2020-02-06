import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Chip from '@material-ui/core/Chip';
import useAboutStyles from './useAboutStyles';

const About = ({isLoading, gitConnected}) => {
    const classes = useAboutStyles();

    const renderGitConnected = ({basics, skills}) => {
        return (
            <div>
                <img src={basics.picture} alt="profile" className={classes.image}/>
                <h2>About Me</h2>
                <b>{basics.label}</b>
                <p>{basics.summary}</p>
                <p><b>Location:</b> {basics.region}</p>
                
                <h2>Skills</h2>
                <div className={classes.root}>
                    { skills.map(({name}, k) => <Chip label={name} key={k} />) }
                </div>
                
                <h2>Profiles</h2>
                <a href={basics.website}>Website</a> | <a href={basics.profiles[1].url}>GitHub</a> | <a href={basics.profiles[2].url}>Twitter</a> | <a href={basics.profiles[3].url}>LinkedIn</a>   
            </div>
        );
        
    }

    return isLoading ? <LoadingSpinner /> : renderGitConnected(gitConnected);
};
export default About;