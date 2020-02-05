import React from 'react';
import {useGitConnected} from './hooks/useGitConnected'
import {DrawerNav} from './DrawerNav';

const App = () => {
    const [gitConnected, isLoading] = useGitConnected();

    !isLoading && console.log(gitConnected.basics.name);

    return (
        <div className="App">
            <DrawerNav gitConnected={gitConnected} isLoading={isLoading}/>
        </div>
    );
}

export default App;
