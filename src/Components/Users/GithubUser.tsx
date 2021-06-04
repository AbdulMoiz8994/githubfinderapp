import React,{useEffect} from 'react'
import  Aos from 'aos';
import 'aos/dist/aos.css'


export interface Props{
    avatar_url: string,
    html_url: string,
    login: string,
  }
  

export const GithubUser: React.FC<Props> = ({avatar_url,html_url,login}) => {
    console.log(avatar_url,html_url,login);
    
useEffect(() =>{
    Aos.init({duration: 1000,easing: 'ease-in-sine',delay: 300, once: false})
})

    return (
        <div className="card text-center"  data-aos="fade-down">
        <img src={avatar_url} alt="Github User" title={login}  className="round-img"/>        
          <h1 className="userName">{login}</h1>
          <a href={html_url} className="btn btn-dark btn-sm my-1">Github Profle</a>
        </div>
    )
}
