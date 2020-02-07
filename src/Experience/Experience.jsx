import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useCardStyles } from '../hooks';

const About = ({isLoading, gitConnected}) => {
    const classes = useCardStyles();
    const renderGitConnected = ({work}) => {
        
        return (
            <div>
                {
                    work.map(({company, position, location, startDate, endDate}, key) => {
                    return (
                        
                        <div key={key}>
                            <Card className={classes.root} >
                                <CardContent>
                                    <b>{company}</b>
                                    <p>{position}</p>
                                    <p>{location}</p>
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
export default About;