import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';


const Projects = ({isLoading, gitConnected}) => {

    const renderGitConnected = ({projects}) => {
        return (
            <div>
                { projects.map(({name, summary, githubUrl}, key) => {
                    return (
                        <div key={key}>
                            <b>{name}</b>
                            <p>{summary}</p>
                            <p>{'GitHub URL: '}<a href={githubUrl}>{githubUrl}</a></p>
                            <br />
                        </div>
                    );
                })}
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
export default Projects;