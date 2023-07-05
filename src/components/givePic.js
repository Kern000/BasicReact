import React from 'react';

export default function GivePic(props){
    return(
        <div>
            <img src={props.url}  alt='dog' style={{height:'400px', width:'400px'}}/>
        </div>
    )
}

//note the require function must be called in App.js
