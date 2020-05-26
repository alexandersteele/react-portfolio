import React from 'react';
import {Route} from 'react-router-dom'
import {DrawerNav} from '../components/DrawerNav';

const GenericRoute = ({component, pathname}) => {
    const GenericComponent = component;

    return (
        <Route exact path = {pathname}>
            <DrawerNav 
                    contentComponent={
                        <GenericComponent/>
                    } 
            />
        </Route>
    );

}

export default GenericRoute;