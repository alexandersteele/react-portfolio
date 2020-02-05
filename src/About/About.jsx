import React from 'react';



const About = ({isLoading, gitConnected}) => {

    const renderGitConnected = ({basics, skills}) => {
        return (
            <div>
                <b>{basics.label}</b>
                <p><b>Summary:</b> {basics.summary}</p>
                <p><b>Location:</b> {basics.region}</p>
                <p><b>Website:</b> {basics.website}</p>
                <p><b>GitHub:</b> {basics.profiles[1].url}</p>
                <p><b>LinkedIn:</b> {basics.profiles[2].url}</p>
                <p><b>Skills:</b></p> 
                {
                    skills.map((skill) => {
                    return (
                        <p>
                            <b>{`${skill.name}: `}</b>
                            {`${skill.level}, ${skill.yearsOfExperience}`}</p>
                    );
                })
        }
            </div>
        );
        
    }

    console.log(gitConnected)
    return (
        <div>
            {isLoading ? <p>Loading...</p> :
                renderGitConnected(gitConnected)}
        </div>
    );
};
export default About;