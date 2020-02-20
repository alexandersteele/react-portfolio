import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import useAboutStyles from './useAboutStyles';

const About = ({isLoading, gitConnected}) => {
    const classes = useAboutStyles();

    const renderGitConnected = ({basics, skills}) => (
            <div>
                <img src={basics.picture} alt="profile" className={classes.image}/>
                <Typography variant="h4" component="h1">
                    About Me
                </Typography>
                <Typography variant="h6" component="h2">
                    {`${basics.label}, ${basics.region}`}
                </Typography>
                <Typography variant="body1" component="p">
                    {basics.summary}
                </Typography>
                <Typography variant="h6" component="h2">
                </Typography>

                <br />

                <Typography variant="h4" component="h1">
                    Skills
                </Typography>
                <div className={classes.root}>
                    { skills.map(({name}, k) => <Chip label={name} key={k} />) }
                </div>

                <br />

                <Typography variant="h4" component="h1">
                    Profiles
                </Typography>
                <Typography variant="body1" component="p">
                    <a href={basics.website}>Website</a> | <a href={basics.profiles[1].url}>GitHub</a> | <a href={basics.profiles[2].url}>Twitter</a> | <a href={basics.profiles[3].url}>LinkedIn</a>   
                </Typography>
            </div>
    )

    return isLoading ? <LoadingSpinner /> : renderGitConnected(gitConnected);
};
export default About;