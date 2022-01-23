import React from 'react';
import {About} from './components/About';
import {Projects} from './components/Projects';
import {Demos} from './components/Demos';
import { BrowserRouter as Router } from 'react-router-dom'
import { Experience } from './components/Experience';
import {Education} from './components/Education';
import { Awards } from './components/Awards';
import { Blog } from './components/Blog';
import { ProfileRoute, BlogRoute, GenericRoute } from './routes';
import { DemoDashboard } from './components/Demos/DemoDashboard';

const App = () => (
        <Router>
            <div className="App">
                <ProfileRoute component={About} pathname="/" />
                <ProfileRoute component={Projects} pathname="/Projects"/>
                <GenericRoute component={Demos} pathname="/Demos" />
                <ProfileRoute component={Experience} pathname="/Experience"/>
                <ProfileRoute component={Education} pathname="/Education"/>
                <ProfileRoute component={Awards} pathname="/Awards"/>
                <BlogRoute component={Blog} pathname="/Blog"/>
                <GenericRoute component={DemoDashboard} pathname="/demos/DemoDashboard" />
            </div>
        </Router>
);

export default App;