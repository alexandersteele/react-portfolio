import React from 'react';
import {useGitConnected, useBlogger} from './hooks'
import {DrawerNav} from './DrawerNav';
import {About} from './About';
import {Projects} from './Projects';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Experience } from './Experience';
import {Education} from './Education';
import { Awards } from './Awards';
import { Blog } from './Blog';


const App = () => {
    const [gitConnected, isGitLoading] = useGitConnected();

    const [blog, isBloggerLoading] = useBlogger();

    return (
        <Router>
            <div className="App">
            <Route exact path="/">
                    <DrawerNav 
                            gitConnected={gitConnected} 
                            isLoading={isGitLoading}
                            contentComponent={
                                <About 
                                    gitConnected={gitConnected}
                                    isLoading={isGitLoading}
                                />
                            } 
                    />
                </Route>
                <Route exact path="/projects">
                    <DrawerNav 
                            gitConnected={gitConnected} 
                            isLoading={isGitLoading}
                            contentComponent={
                                <Projects 
                                    gitConnected={gitConnected}
                                    isLoading={isGitLoading}
                                />
                            } 
                    />
                </Route>
                <Route exact path="/experience">
                    <DrawerNav 
                            gitConnected={gitConnected} 
                            isLoading={isGitLoading}
                            contentComponent={
                                <Experience 
                                    gitConnected={gitConnected}
                                    isLoading={isGitLoading}
                                />
                            } 
                    />
                </Route>
                <Route exact path="/education">
                    <DrawerNav 
                            gitConnected={gitConnected} 
                            isLoading={isGitLoading}
                            contentComponent={
                                <Education 
                                    gitConnected={gitConnected}
                                    isLoading={isGitLoading}
                                />
                            } 
                    />
                </Route>
                <Route exact path="/awards">
                    <DrawerNav 
                        gitConnected={gitConnected} 
                        isLoading={isGitLoading}
                        contentComponent={
                            <Awards 
                                gitConnected={gitConnected}
                                isLoading={isGitLoading}
                            />
                        } 
                    />
                </Route>
                <Route exact path="/blog">
                    <DrawerNav 
                        gitConnected={gitConnected} 
                        isLoading={isGitLoading}
                        contentComponent={
                            <Blog 
                                blog={blog}
                                isLoading={isBloggerLoading}
                            />
                        } 
                    />
                </Route>
                
            </div>
        </Router>
        
        
    );
}

export default App;
