import React from 'react';

export default function DisplayMessage(props){
    return(
        <div>{props.message.toUpperCase()}</div>
    )
}


