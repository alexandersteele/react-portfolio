import React from 'react';
import {About} from './components/About';
import {Projects} from './components/Projects';
import { BrowserRouter as Router } from 'react-router-dom'
import { Experience } from './components/Experience';
import {Education} from './components/Education';
import { Awards } from './components/Awards';
import { Blog } from './components/Blog';
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
