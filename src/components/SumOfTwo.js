import React from 'react';

export default function SumOfTwo(props){
      
    return(
        <div>
        {parseInt(props.integer) + parseInt(props.integer2)}
        </div>
    )
}
