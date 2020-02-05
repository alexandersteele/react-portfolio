import React from 'react';
import {useGitConnected} from './hooks'
import {DrawerNav} from './DrawerNav';
import {About} from './About';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'



const App = () => {
    const [gitConnected, isLoading] = useGitConnected();

    !isLoading && console.log(gitConnected.basics.name);

    return (
        <Router>
            <div className="App">
            <Route exact path="/">
                <DrawerNav 
                        gitConnected={gitConnected} 
                        isLoading={isLoading}
                        contentComponent={<About />} 
                />
            </Route>
            <Route exact path="/skills">
                <DrawerNav 
                        gitConnected={gitConnected} 
                        isLoading={isLoading}
                        contentComponent={<div>skills</div>} 
                />
            </Route>
            <Route exact path="/projects">
                <DrawerNav 
                        gitConnected={gitConnected} 
                        isLoading={isLoading}
                        contentComponent={<div>projects</div>} 
                />
            </Route>
                
            </div>
        </Router>
    );
}

export default App;
