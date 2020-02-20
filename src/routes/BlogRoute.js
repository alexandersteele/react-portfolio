import React from 'react';
import {Route} from 'react-router-dom'
import {DrawerNav} from '../DrawerNav';
import {useBlogger, useGitConnected} from '../hooks'

const BlogRoute = ({component, pathname}) => {
    const [blog, isBloggerLoading] = useBlogger();
    const [gitConnected, isGitLoading] = useGitConnected();
    const BlogComponent = component;

    return (
        <Route exact path = {pathname}>
            <DrawerNav 
                    gitConnected={gitConnected} 
                    isLoading={isGitLoading}
                    contentComponent={
                        <BlogComponent
                            blog={blog}
                            isLoading={isBloggerLoading}
                        />
                    } 
            />
        </Route>
    );

}

export default BlogRoute;