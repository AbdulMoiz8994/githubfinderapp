import React from 'react'


export interface Props{
    avatar_url: string,
    html_url: string,
    login: string,
  }
  

export const GithubUser: React.FC<Props> = ({avatar_url,html_url,login}) => {
    console.log(avatar_url,html_url,login);
    
    return (
        <div className="card text-center">
        <img src={avatar_url} alt="Github User" title={login}  className="round-img"/>        
          <h1 className="userName">{login}</h1>
          <a href={html_url} className="btn btn-dark btn-sm my-1">Github Profle</a>
        </div>
    )
}
