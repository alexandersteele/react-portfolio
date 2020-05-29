import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import '../../../../node_modules/react-vis/dist/style.css'
import { FlexibleWidthXYPlot, LineSeries, VerticalGridLines, 
         HorizontalGridLines, XAxis, YAxis, RadialChart, makeVisFlexible, 
         DiscreteColorLegend} from 'react-vis';
import { useCardStyles } from '../../../hooks';
import dashboardData from './dashboardData';

const DemoDashboard = () => {

    const classes = useCardStyles();
    const FlexRadialChart = makeVisFlexible(RadialChart)

    return (

        <div>
            <Typography variant="h4" component="h1">
                Spontaneous Combustion Data Dashboard (FAKE DATA)
            </Typography>
            <br />

            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12} lg={8}>
                    <Box boxShadow={2}>
                        <Card className={classes.paper} boxShadow={2}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Yearly Cases of Spontaneous Combustion Fatalities
                                </Typography>
                                <FlexibleWidthXYPlot xType="time" height={280}>
                                    <VerticalGridLines />
                                    <HorizontalGridLines />
                                    <XAxis title="Year"/>
                                    <YAxis title="Deaths recorded as Spontaneous Combustion"/>
                                    <LineSeries data={dashboardData.data} />
                                </FlexibleWidthXYPlot>

                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={12} md={8} lg={4}>
                    <Box boxShadow={2}>
                        <Card className={classes.paper} boxShadow={2}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Spon. Combustion vs. Sharks AVG
                                </Typography>
                                <DiscreteColorLegend  items={dashboardData.series}/>
                                <FlexRadialChart data={dashboardData.data2} height={200}/>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={12} md={8} lg={4}>
                    <Box boxShadow={2}>
                        <Card className={classes.paper} boxShadow={2}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Spon. Combustion cases this year
                                </Typography>
                                <br />
                                <Typography variant="h1" component="h1" style={{textAlign: "center"}}>
                                    3
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={8}>
                    <Box boxShadow={2}>
                        <Card className={classes.paper} boxShadow={2}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Yearly Cases of Spontaneous Combustion in USA Vs. Rest of World
                                </Typography>

                                <Grid container className={classes.root} spacing={2}>
                                <Grid item xs={2} lg={2}>
                                    <DiscreteColorLegend  items={dashboardData.series2}/>
                                </Grid>
                                <Grid item xs={10} lg={10}>
                                    <FlexibleWidthXYPlot xType="time" height={280}>
                                        <VerticalGridLines />
                                        <HorizontalGridLines />
                                        <XAxis title="Year"/>
                                        <YAxis title="Spontaneous Combustion Cases"/>
                                        <LineSeries data={dashboardData.usa_data} />
                                        <LineSeries data={dashboardData.rest_data} />
                                    </FlexibleWidthXYPlot>
                                </Grid>
                                
                                </Grid>
                                
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
            

        </div>
       
    );
};

export default DemoDashboard;