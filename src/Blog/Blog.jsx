import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useCardStyles } from '../hooks';

const Blog = ({isLoading, blog}) => {
    const classes = useCardStyles();

    const renderBlogger = ({items}) => {
        return (
            <div>
                { items.map(({title, content, url, published}, k) => (
                    <div key={k}>
                        <Card className={classes.root}>
                            <CardContent>
                                <a href={url} style={{textDecoration: 'none'}}><b>{`${title}`}</b></a>
                                {/* Evaluates response to JSX */}
                                <p dangerouslySetInnerHTML={{ __html: content }}></p>
                            </CardContent>
                        </Card>
                        <br /> 
                    </div>
                    
                )) }            
            </div>
        );
        
        
    }
return isLoading ? <LoadingSpinner /> : renderBlogger(blog);
}

export default Blog;