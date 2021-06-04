import React,{useEffect, useRef} from 'react'

export type InputType=HTMLInputElement

export const SearchBox = () => {
 const getInput=useRef<any>(null)

 useEffect(() =>{
   getInput.current.focus()  
 },[])
    return (
        <>
        <form method="post" className="form">
           <input type="text" ref={getInput} name="text" placeholder="Find Github User" />     
           <input type="submit" value="Submit" className="btn btn-dark btn-block" />
        </form>  
        </>
    )
}
