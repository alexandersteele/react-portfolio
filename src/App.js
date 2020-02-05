import React, { useEffect, useState } from 'react';

function useGitConnected (url) {
  const [name, setName] = useState('');
  const [label, setLabel] = useState('');
  const [region, setRegion] = useState('');
  const [expYears, setExpYears] = useState('');

  async function fetchData() {
    await fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setName(data.basics.name);
        setLabel(data.basics.label);
        setRegion(data.basics.region);
        setExpYears(data.basics.yearsOfExperience);
      }
        )
      .catch(err => console.error(err))
  }

  useEffect(() => {
    
    fetchData();
  }, [])
  

  return [name, label, region, expYears];

  

}

const App = () => {

  const URL = 'https://gitconnected.com/v1/portfolio/alexandersteele'
  
  const [name, label, region, expYears] = useGitConnected(URL);

  console.log(name);
  console.log(label);
  console.log(region);
  console.log(expYears);


  

  

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
