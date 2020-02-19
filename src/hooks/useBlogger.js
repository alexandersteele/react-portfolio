import { useEffect, useState } from 'react';

const useBlogger = () => {
    const [blog, setBlog] = useState('');
    const [isLoading, setIsloading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
          setIsloading(true);
          await fetch(process.env.REACT_APP_BLOGGER_URL)
          .then(res => res.json())
          .then(data => setBlog(data))
          .catch(err => console.error(err))
          .finally(() => setIsloading(false))
      }
  
    fetchData();
    }, [])
  
    return [blog, isLoading];
}

export default useBlogger;