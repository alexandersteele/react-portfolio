import React from 'react';
import {Route} from 'react-router-dom'
import {DrawerNav} from '../DrawerNav';
import {useGitConnected} from '../hooks'

const ProfileRoute = ({component, pathname}) => {
    const [gitConnected, isGitLoading] = useGitConnected();
    let ProfileComponent;

    if (typeof gitConnected.statusCode !== 'undefined'){
        ProfileComponent = () => <p>{gitConnected.error}</p>
    }
    else {
        ProfileComponent = component;
    }

    return (
        <Route exact path = {pathname}>
            <DrawerNav 
                    gitConnected={gitConnected} 
                    isLoading={isGitLoading}
                    contentComponent={
                        <ProfileComponent
                            gitConnected={gitConnected}
                            isLoading={isGitLoading}
                        />
                    } 
            />
        </Route>
    );
}

export default ProfileRoute;