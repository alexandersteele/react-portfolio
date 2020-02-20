import React from 'react';
import {About} from './About';
import {Projects} from './Projects';
import { BrowserRouter as Router } from 'react-router-dom'
import { Experience } from './Experience';
import {Education} from './Education';
import { Awards } from './Awards';
import { Blog } from './Blog';
import { ProfileRoute, BlogRoute } from './routes';

const App = () => (
        <Router>
            <div className="App">
                <ProfileRoute component={About} pathname="/" />
                <ProfileRoute component={Projects} pathname="/Projects"/>
                <ProfileRoute component={Experience} pathname="/Experience"/>
                <ProfileRoute component={Education} pathname="/Education"/>
                <ProfileRoute component={Awards} pathname="/Awards"/>
                <BlogRoute component={Blog} pathname="/Blog"/>  
            </div>
        </Router>
);


export default App;
