import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';


const About = ({isLoading, gitConnected}) => {

    const renderGitConnected = ({work}) => {
        return (
            <div>
                {
                    work.map(({company, position, location, startDate, endDate}, key) => {
                    return (
                        <div key={key}>
                            <b>{company}</b>
                            <p>{position}</p>
                            <p>{location}</p>
                            <p>{`${startDate} ― ${endDate}`}</p>
                            <br />
                        </div>
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