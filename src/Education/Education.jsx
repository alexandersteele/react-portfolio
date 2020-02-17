import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useCardStyles } from '../hooks';
import padDate from '../utils/padDate'

const Education = ({isLoading, gitConnected}) => {
    const classes = useCardStyles();

    const renderGitConnected = ({education}) => {
        return (
            <div>
                {
                    education.map(({institution, area, studyType, gpa, start, end}, key) => {
                        let endDate =''
                        let startDate = `${padDate(start.month)}/${start.year}`
                        typeof end.year === 'undefined' ? endDate = 'Present' : endDate = `${padDate(end.month)}/${end.year}`
                    return (
                        <div key={key}>
                            <Card className={classes.root} >
                                <CardContent>
                                    <p><b>{`${institution} - ${area}`}</b></p>
                                    <b>{studyType}</b>
                                    <p>{gpa}</p>
                                    <p>{`${startDate} ― ${endDate}`}</p>
                                </CardContent>
                            </Card>
                            <br />
                        </div>
                    );
                })
        }
            </div>
        );
        
    }

    return (
        <div>
            {isLoading ? <LoadingSpinner /> :
                renderGitConnected(gitConnected)}
        </div>
    );
};
export default Education;