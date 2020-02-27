import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import { useCardStyles } from '../../hooks';
import padDate from '../../utils/padDate'

const Education = ({isLoading, gitConnected}) => {
    const classes = useCardStyles();

    const renderGitConnected = ({education}) => education.map(({institution, area, studyType, gpa, start, end}, key) => {
            let endDate =''
            let startDate = `${padDate(start.month)}/${start.year}`
            typeof end.year === 'undefined' ? endDate = 'Present' : endDate = `${padDate(end.month)}/${end.year}`
            
            return (
                <div key={key}>
                    <Box boxShadow={2}>
                        <Card className={classes.root} >
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    {`${institution}`}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {`${studyType} ${area}`}
                                </Typography>
                                <Typography variant="h6"  component="h2">
                                    {gpa}
                                </Typography>
                                <Typography variant="body1" component="p">
                                    {`${startDate} ― ${endDate}`}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                    <br />
                </div>
            );
        
        })
    


    return isLoading ? <LoadingSpinner /> : renderGitConnected(gitConnected);

}
export default Education;