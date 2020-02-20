import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useCardStyles } from '../hooks';
import { format } from 'date-fns';

const Blog = ({isLoading, blog}) => {
    const classes = useCardStyles();

    const renderBlogger = ({items}) => items.map(({title, content, url, published, author}, k) => (
            <div key={k}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {author.displayName}
                        </Typography>
                        <Typography variant="h5" component="h2">
                        <a href={url} style={{textDecoration: 'none'}}>{`${title}`}</a> 
                        </Typography>
                        <Typography variant="body1" component="p" dangerouslySetInnerHTML={{ __html: content }} />
                        <Typography variant="body2" component="p">
                            {/* Evaluates response to JSX */}
                            {format(new Date(published), ' dd/MM/yyyy')}
                        </Typography>
                    </CardContent>
                </Card>
                <br /> 
            </div>          
    ))        
        
return isLoading ? <LoadingSpinner /> : renderBlogger(blog);
}

export default Blog;