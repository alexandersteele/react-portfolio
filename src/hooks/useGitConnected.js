import { useEffect, useState } from 'react';

const useGitConnected = () => {
    const [gitConnected, setGitConnected] = useState('');
    const [isLoading, setIsloading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
          setIsloading(true);
          await fetch(process.env.REACT_APP_CONNECTED_URL)
          .then(res => res.json())
          .then(data => setGitConnected(data))
          .catch(err => console.error(err))
          .finally(() => setIsloading(false))
      }
  
    fetchData();
    }, [])
  
    return [gitConnected, isLoading];
}

export default useGitConnected;