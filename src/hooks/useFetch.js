import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url,type) {
  const [data,setData]= useState([]);
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(true);

  const getData=async()=>{
    try{
      const {data:responseData}=await axios.get(url);
      if(type==="books"){
        setData(responseData.books);
      }
      else{
        setData(responseData);
      }
    }catch(err){
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    getData();
  },[url]);
  
  return {data,loading,error};
}

export default useFetch;