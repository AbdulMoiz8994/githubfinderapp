import React from 'react'
import {AlertData} from '../../App'
export interface AlertType{
    alert: AlertData | undefined
}


export const Alert:React.FC<AlertType> = ({alert}) => {

    
    console.log();
    return (
        
        <div className={`alert alert-${alert?.type}`}>
            <i className="fas fa-exclamation-circle"></i>{alert?.msg}
        </div>
    )
}
