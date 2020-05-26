import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import '../../../node_modules/react-vis/dist/style.css'
import {FlexibleWidthXYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';
import { useCardStyles } from '../../hooks'

const DemoDashboard = () => {

    const classes = useCardStyles();

    const data = [
        {x: new Date("2010"), y: 3},
        {x: new Date("2011"), y: 8},
        {x: new Date("2012"), y: 5},
        {x: new Date("2013"), y: 4},
        {x: new Date("2014"), y: 9},
        {x: new Date("2015"), y: 1},
        {x: new Date("2016"), y: 7},
        {x: new Date("2017"), y: 6},
        {x: new Date("2018"), y: 24},
        {x: new Date("2019"), y: 2},
        {x: new Date("2020"), y: 0}
      ];

    return (


        
        <div>
            <Typography variant="h4" component="h1">
                Spontaneous Combustion Data Dashboard
            </Typography>
            <br />


            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12} lg={8}>
                    <Box boxShadow={2}>
                        <Card className={classes.paper} boxShadow={2}>
                            <CardContent>
                            <FlexibleWidthXYPlot xType="time" height={320}>
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
            </Grid>
            

        </div>
       
    );
};

export default DemoDashboard;