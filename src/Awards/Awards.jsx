import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { useCardStyles } from '../hooks';
import padDate from '../utils/padDate'

const Awards = ({isLoading, gitConnected}) => {
    const classes = useCardStyles();

    const renderGitConnected = ({awards}) => {
        return (
            <div>
                {
                    awards.map(({title, awarder, summary, fullDate}, key) => {
                        console.log(awards)
                    return (
                        <div key={key}>
                            <Card className={classes.root} >
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        {awarder}
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        {title}
                                    </Typography>
                                    <Typography variant="body1" component="p">
                                        {summary}
                                    </Typography>
                                    <Typography variant="body1" component="p">
                                        {`${padDate(fullDate.month)}/${fullDate.year}`}
                                    </Typography>
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