import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';


const Awards = ({isLoading, gitConnected}) => {

    console.log(gitConnected)

    const renderGitConnected = ({awards}) => {
        return (
            <div>
                {
                    awards.map(({title, awarder, summary, date}, key) => {
                    return (
                        <div key={key}>
                            <b>{title}</b>
                            <p>{awarder}</p>
                            <p>{summary}</p>
                            <p>{date}</p>

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
export default Awards;