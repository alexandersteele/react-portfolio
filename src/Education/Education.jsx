import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';


const Education = ({isLoading, gitConnected}) => {

    const renderGitConnected = ({education}) => {
        return (
            <div>
                {
                    education.map(({institution, area, studyType, gpa, startDate, endDate}, key) => {
                    return (
                        <div key={key}>
                            <b>{`${institution} - ${area} (${studyType})`}</b>
                            <p>{gpa}</p>
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
export default Education;