import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { useCardStyles } from '../../hooks';
import padDate from '../../utils/padDate'

const About = ({isLoading, gitConnected}) => {
    const classes = useCardStyles();

    const renderGitConnected = ({work}) => work.map(({company, position, summary, location, start, end}, key) => {
            let endDate =''
            let startDate = `${padDate(start.month)}/${start.year}`
            typeof end.year === 'undefined' ? endDate = 'Present' : endDate = `${padDate(end.month)}/${end.year}`
                            
            return (
                <div key={key}>
                    <Card className={classes.root} >
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {company}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {position}
                            </Typography>
                            <Typography variant="body1" component="p">
                                {summary}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {`${startDate} ― ${endDate}`}
                            </Typography>
                            <Typography variant="h6" component="h2">
                                {location}
                            </Typography>
                        </CardContent>
                    </Card>
                    <br />
                </div>
            
            );
    })
        

    return isLoading ? <LoadingSpinner /> : renderGitConnected(gitConnected);
}
export default About;