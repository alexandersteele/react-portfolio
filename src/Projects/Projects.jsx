import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useCardStyles } from '../hooks';


const Projects = ({isLoading, gitConnected}) => {
    const classes = useCardStyles();

    const renderGitConnected = ({projects}) => (
        <div>
            { projects.map(({name, summary, githubUrl}, key) => (
                <div key={key}>
                    <Card className={classes.root} >
                        <CardContent>
                            <b>{name}</b>
                            <p>{summary}</p>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href={githubUrl}>GitHub Link</Button>
                        </CardActions>
                    </Card>
                    <br />
                </div>
            ))}
        </div>
    )
    return isLoading ? <LoadingSpinner /> : renderGitConnected(gitConnected);
};
export default Projects;