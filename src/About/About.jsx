import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';


const About = ({isLoading, gitConnected}) => {

    const renderGitConnected = ({basics, skills}) => {
        return (
            <div>
                <b>{basics.label}</b>
                <p>{basics.summary}</p>
                <p><b>Location:</b> {basics.region}</p>
                <p><b>Website:</b> {basics.website}</p>
                <p><b>GitHub:</b> {basics.profiles[1].url}</p>
                <p><b>LinkedIn:</b> {basics.profiles[2].url}</p>
                <p><b>Skills:</b></p> 
                {
                    skills.map(({name, level, yearsOfExperience}, key) => {
                    return (
                        <p key={key}>
                            <b>{`${name}: `}</b>
                            {`${level}, ${yearsOfExperience} years`}</p>
                    );
                })
        }
            </div>
        );
        
    }

    return (
        <div>
            {isLoading ? <LoadingSpinner /> :
                renderGitConnected(gitConnected)}
        </div>
    );
};
export default About;