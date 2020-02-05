import { useEffect, useState } from 'react';

function useGitConnected (url) {
    const [gitConnected, setGitConnected] = useState('');
    const [isLoading, setIsloading] = useState(true);
  
    useEffect(() => {
      async function fetchData() {
          await fetch(url)
          .then(res => res.json())
          .then(data => setGitConnected(data))
          .catch(err => console.error(err))
          .finally(() => setIsloading(false))
      }
  
    fetchData();
    }, [url])
  
    return [gitConnected, isLoading];
}

export default useGitConnected;