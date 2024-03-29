import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { useCardStyles } from '../../hooks';


const Projects = ({isLoading, gitConnected}) => {
    const classes = useCardStyles();

    const renderGitConnected = ({projects}) => projects.map(({name, summary, githubUrl}, key) => (
            <Grid item xs={12} md={6}>
                <Box boxShadow={2}>
                    <Card className={classes.paper} boxShadow={2}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                GitHub
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {name}
                            </Typography>
                            <Typography variant="body1" component="p">
                                {summary}
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button size="small" href={githubUrl}>GitHub Link</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
    ))
    
    return isLoading ? <LoadingSpinner /> : 
        <Grid container className={classes.root} spacing={2}>
                    {renderGitConnected(gitConnected)}
            </Grid>

};
export default Projects;