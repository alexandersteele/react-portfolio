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


const Demos = () => {
    const classes = useCardStyles();
    
    return (
        <Grid container className={classes.root} spacing={2}>
                    
            
        <Grid item xs={12} md={6}>
                <Box boxShadow={2}>
                    <Card className={classes.paper} boxShadow={2}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Visualising Real Data Dashboard
                            </Typography>
                            <Typography variant="body1" component="p">
                                An example dashboard that maps real data entries to graphs using React-Vis and Cube.js.
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button size="small" href="/demos/DemoDashboard">Check it out</Button>
                            <Button size="small" href="/demos/dds">Blog</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>

            <Grid item xs={12} md={6}>
                <Box boxShadow={2}>
                    <Card className={classes.paper} boxShadow={2}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Data Visualisation Dashboard First-Look
                            </Typography>
                            <Typography variant="body1" component="p">
                                An example dashboard that maps fake data entries to graphs using React-Vis
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button size="small" href="/demos/DemoDashboard">Check it out</Button>
                            <Button size="small" href="/demos/dds">Blog</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>

            </Grid>
    );

};
export default Demos;