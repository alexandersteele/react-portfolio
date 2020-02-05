import React from 'react';
import {useGitConnected} from './GitConnected'


const App = () => {

  const URL = 'https://gitconnected.com/v1/portfolio/alexandersteele'
  
  const [gitConnected, isLoading] = useGitConnected(URL);

  if (!isLoading) {
    console.log(gitConnected.basics.name);
  }
  
  

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello world
        </p>
      </header>
    </div>
  );
}

export default App;
