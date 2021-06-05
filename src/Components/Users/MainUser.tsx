import React from 'react'
import {GithubUser} from './GithubUser'



export interface Props{
    data: any,
    loading: boolean,
    users: string[],
}


const heading: string="Loading.."

export const MainUser:React.FC<Props> = ({data,loading,users}) => {

console.log(data,loading);

if(loading){
    return <h1>{heading}</h1>
}else{
    return (
        <div>
            {users.map((users:any ) =>
            <GithubUser 
           
            key={users.id} 
            avatar_url={users.avatar_url}
            html_url={users.html_url}
            login={users.login}
            />
            )}
        </div>
    )
}

}
