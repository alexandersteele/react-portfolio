import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useCardStyles } from '../hooks';

const Awards = ({isLoading, gitConnected}) => {
    const classes = useCardStyles();

    const renderGitConnected = ({awards}) => {
        return (
            <div>
                {
                    awards.map(({title, awarder, summary, date}, key) => {
                    return (
                        <div key={key}>
                            <Card className={classes.root} >
                                <CardContent>
                                    <b>{title}</b>
                                    <p>{awarder}</p>
                                    <p>{summary}</p>
                                    <p>{date}</p>
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
export default Awards;