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
        <Grid item xs={12} md={6}>
                <Box boxShadow={2}>
                    <Card className={classes.paper} boxShadow={2}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Data Visualisation Dashboard
                            </Typography>
                            <Typography variant="body1" component="p">
                                An example dashboard that maps fake data entries to graphs using Cube.js
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button size="small" href="/demos/DemoDashboard">Check it out</Button>
                            <Button size="small" href="/demos/dds">Blog</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
    );

};
export default Demos;