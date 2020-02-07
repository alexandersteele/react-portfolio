import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useCardStyles } from '../hooks';

const Education = ({isLoading, gitConnected}) => {
    const classes = useCardStyles();

    const renderGitConnected = ({education}) => {
        return (
            <div>
                {
                    education.map(({institution, area, studyType, gpa, startDate, endDate}, key) => {
                    return (
                        <div key={key}>
                            <Card className={classes.root} >
                                <CardContent>
                                    <b>{`${institution} - ${area} (${studyType})`}</b>
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