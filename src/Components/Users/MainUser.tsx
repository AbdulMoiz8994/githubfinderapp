import React from 'react'
import {GithubUser} from './GithubUser'

export interface Props{
    data: any,
    loading: boolean
}


const heading: string="Loading.."

export const MainUser:React.FC<Props> = ({data,loading}) => {

console.log(data,loading);

if(loading){
    return <h1>{heading}</h1>
}else{
    return (
        <div>
            {data.map((users:any ) =>
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
