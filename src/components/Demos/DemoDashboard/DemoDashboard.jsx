import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import '../../../../node_modules/react-vis/dist/style.css'
import {FlexibleWidthXYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, RadialChart, makeVisFlexible, DiscreteColorLegend} from 'react-vis';
import { useCardStyles } from '../../../hooks'

const DemoDashboard = () => {

    const classes = useCardStyles();

    const FlexRadialChart = makeVisFlexible(RadialChart)

    const data = [
        {x: new Date("2010"), y: 3},
        {x: new Date("2011"), y: 1},
        {x: new Date("2012"), y: 2},
        {x: new Date("2013"), y: 0},
        {x: new Date("2014"), y: 2},
        {x: new Date("2015"), y: 1},
        {x: new Date("2016"), y: 3},
        {x: new Date("2017"), y: 0},
        {x: new Date("2018"), y: 10},
        {x: new Date("2019"), y: 0},
        {x: new Date("2020"), y: 1}
      ];

      const series = ["Shark Fatalaties(240)", "Spontaneous Combustion Fatalaties(2)"]

      const series2 = ["USA", "Rest of World"]

      const data2 = [{angle: 2}, {angle: 240}]

      const usa_data = [
        {x: new Date("2010"), y: 2},
        {x: new Date("2011"), y: 0},
        {x: new Date("2012"), y: 0},
        {x: new Date("2013"), y: 0},
        {x: new Date("2014"), y: 1},
        {x: new Date("2015"), y: 1},
        {x: new Date("2016"), y: 2},
        {x: new Date("2017"), y: 0},
        {x: new Date("2018"), y: 8},
        {x: new Date("2019"), y: 0},
        {x: new Date("2020"), y: 1}
      ];

      const rest_data = [
        {x: new Date("2010"), y: 1},
        {x: new Date("2011"), y: 1},
        {x: new Date("2012"), y: 2},
        {x: new Date("2013"), y: 0},
        {x: new Date("2014"), y: 1},
        {x: new Date("2015"), y: 1},
        {x: new Date("2016"), y: 1},
        {x: new Date("2017"), y: 0},
        {x: new Date("2018"), y: 2},
        {x: new Date("2019"), y: 0},
        {x: new Date("2020"), y: 0}
      ];

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
                                    <LineSeries data={data} />
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
                                <DiscreteColorLegend  items={series}/>

                                <FlexRadialChart data={data2} height={200}/>


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
                                    <DiscreteColorLegend  items={series2}/>
                                </Grid>
                                <Grid item xs={10} lg={10}>
                                    <FlexibleWidthXYPlot xType="time" height={280}>
                                        <VerticalGridLines />
                                        <HorizontalGridLines />
                                        <XAxis title="Year"/>
                                        <YAxis title="Spontaneous Combustion Cases"/>
                                        <LineSeries data={usa_data} />
                                        <LineSeries data={rest_data} />
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