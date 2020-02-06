import React from 'react';
import {useGitConnected} from './hooks'
import {DrawerNav} from './DrawerNav';
import {About} from './About';
import {Projects} from './Projects';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Experience } from './Experience';
import {Education} from './Education';
import { Awards } from './Awards';



const App = () => {
    const [gitConnected, isLoading] = useGitConnected();

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
                            contentComponent={
                                <Projects 
                                    gitConnected={gitConnected}
                                    isLoading={isLoading}
                                />
                            } 
                    />
                </Route>
                <Route exact path="/experience">
                    <DrawerNav 
                            gitConnected={gitConnected} 
                            isLoading={isLoading}
                            contentComponent={
                                <Experience 
                                    gitConnected={gitConnected}
                                    isLoading={isLoading}
                                />
                            } 
                    />
                </Route>
                <Route exact path="/education">
                    <DrawerNav 
                            gitConnected={gitConnected} 
                            isLoading={isLoading}
                            contentComponent={
                                <Education 
                                    gitConnected={gitConnected}
                                    isLoading={isLoading}
                                />
                            } 
                    />
                </Route>
                <Route exact path="/awards">
                    <DrawerNav 
                        gitConnected={gitConnected} 
                        isLoading={isLoading}
                        contentComponent={
                            <Awards 
                                gitConnected={gitConnected}
                                isLoading={isLoading}
                            />
                        } 
                    />
                </Route>
                
            </div>
        </Router>
        
        
    );
}

export default App;
