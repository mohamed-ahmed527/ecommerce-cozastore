import { useEffect, useState } from "react";

const FetchData = (url) =>{
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const abortCont = new AbortController();
    const signal = abortCont.signal;
    setTimeout(() => {    
      fetch(url, signal)
        .then(res => {
          if (!res.ok){
            throw Error ("can't fetch data from this resource");
          }
          return res.json();
        })
        .then(data=>{
          setData(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
        })
    },0 );
    return () => abortCont.abort();
  },[]);
  return {data,error,loading} ;
};


export default FetchData ;