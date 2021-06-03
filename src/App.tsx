import React, { useEffect, useState } from 'react';
import './App.css';
// import {Service} from './Service/Service'
import {MainUser} from './Components/MainUser'
import axios from 'axios'



function App() {

let [loading, setLoading]=useState<boolean>(false)
let [data, setData]=useState<any>([])
  useEffect(() =>{
    setLoading(true)
     const fetchData=async():Promise<void> =>{
      let {data}=await axios.get(`https://api.github.com/users?client_id=${process.env.React_App_Client_ID}&client_secret=${process.env.React_App_Client_Secret}`)

      console.log(data);
      
      setData(data) 
      setLoading(false)
     }
    fetchData()
  },[])

// For Heading Type
const heading:string="Github Users"

  return (
    <div className="App">
        <h1 className="heading1">{heading}</h1>
        <MainUser 
           data={data}
           loading={loading}
          />
    </div>
  );
}

export default App;
