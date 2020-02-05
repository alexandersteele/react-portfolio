import React from 'react';
import {useGitConnected} from './hooks'
import {DrawerNav} from './DrawerNav';
import {About} from './About';
import { Route, BrowserRouter as Router } from 'react-router-dom'



const App = () => {
    const [gitConnected, isLoading] = useGitConnected();

    !isLoading && console.log(gitConnected.basics.name);

    return (
        <Router>
            <div className="App">
            <Route exact path="/">
                <DrawerNav 
                    contentComponent={
                        <About 
                            gitConnected={gitConnected}
                            isLoading={isLoading}
                        />
                    } 
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
