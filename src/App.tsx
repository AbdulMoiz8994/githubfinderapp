import React, { useEffect, useState } from 'react';
import './App.css';
// import {Service} from './Service/Service'
import {MainUser} from './Components/Users/MainUser'
import {SearchBox} from './Components/Users/SearchBox'
import axios from 'axios'
import  Aos from 'aos';
import 'aos/dist/aos.css'



function App() {

let [loading, setLoading]=useState<boolean>(false)
let [data, setData]=useState<any>([])

// We can see the github users in our choice name
let [users, setUsers]=useState<any>([])
let [alert,setAlert]=useState<null | string>(null)


  useEffect(() =>{
    setLoading(true)
     const fetchData=async():Promise<void> =>{
      let {data}=await axios.get(`https://api.github.com/users?client_id=${process.env.React_App_Client_ID}&client_secret=${process.env.React_App_Client_Secret}`)

      console.log(data);
      
      setData(data) 
      setLoading(false)
      Aos.init({duration: 1000})
     }
    fetchData()
  },[])

// For Heading Type
const heading:string="Github Users"

// For searching Github User API
const SearchUserFunc= async(text: string) =>{
  setLoading(true)
const data= await axios.get(`https://api.github.com/search/users?q=${text}&?client_id=${process.env.React_App_Client_ID}&client_secret=${process.env.React_App_Client_Secret}`)
   console.log(data);
   setData(data)
   setLoading(false)
}





  return (
    <div className="App">
        <h1 className="heading1" data-aos="zoom-in">{heading}</h1>
        <SearchBox
          SearchUserFunc={SearchUserFunc}
        />
        <MainUser 
           data={data}
           loading={loading}
          />
    </div>
  );
}

export default App;
