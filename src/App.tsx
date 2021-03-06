import React, { useEffect, useState } from 'react';
import './App.css';
// import {Service} from './Service/Service'
import {MainUser} from './Components/Users/MainUser'
import {SearchBox} from './Components/Users/SearchBox'
import {Alert} from './Components/Alert/Alert'

import axios from 'axios'
import  Aos from 'aos';
import 'aos/dist/aos.css'


export type AlertData={
  msg: string,
  type: string,
}



function App() {

let [loading, setLoading]=useState<boolean>(false)
let [data, setData]=useState<string[]>([])

// We can see the github users in our choice name
let [users, setUsers]=useState<string[]>([])
let [alert,setAlert]=useState<AlertData>()


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
const {data:{items}}= await axios.get(`https://api.github.com/search/users?q=${text}&?client_id=${process.env.React_App_Client_ID}&client_secret=${process.env.React_App_Client_Secret}`)
   console.log(items);
   setUsers(items)
   setLoading(false)
}
// If the user click ti empty input box then show danger text lin where we need to tell that you should fill the box
const setAlerts=({msg,type}:AlertData) =>{
   console.log(msg,type);
   setAlert({msg,type})
   setTimeout(() =>{
     setAlert(undefined)
   },2000)
}
const ClearUserButton=() =>{
  setUsers([])
}


  return (
    <div className="App">
        <h1 className="heading1" data-aos="zoom-in">{heading}</h1>

        <Alert alert={alert}/>
        <SearchBox
          SearchUserFunc={SearchUserFunc}
          setAlerts={setAlerts}
          ClearUserButton={ClearUserButton}
          showClearButton={users.length > 0 ? true : false }
        />
        <MainUser 
           data={data}
           loading={loading}
           users={users}
          />
    </div>
  );
}

export default App;
