import React,{useEffect, useRef,MutableRefObject,useState} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export interface SearchData{
    SearchUserFunc:(text: string) => Promise<void>
}



export const SearchBox:React.FC<SearchData> = ({SearchUserFunc}) => {

let [state, setState]=useState<string>("")

 let getInput:MutableRefObject<string | any>=useRef('')

 useEffect(() =>{
   getInput.current.focus();
   Aos.init({duration: 1000,easing: 'ease-in-sine'})

 },[])
//  let value: string='';
 const onChangeFunc=(e:React.FormEvent<EventTarget>) =>{
    // e.preventDefault()
    //  value=getInput.current.value
     setState(getInput.current.value)
     console.log(state);
     

}

const onSubmitFunc=(e:React.FormEvent<EventTarget>) =>{
    e.preventDefault()
 SearchUserFunc(state)
 setState("")
 
}
    return (
        <>
        <form method="post" className="form" data-aos="fade-down" onSubmit={onSubmitFunc}>
           <input type="text" ref={getInput} name="text" placeholder="Find Github User" onChange={onChangeFunc}/>     
           <input type="submit" value="Submit" className="btn btn-dark btn-block" />
        </form>  
        </>
    )
}
