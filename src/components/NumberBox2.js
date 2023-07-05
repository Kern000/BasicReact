import React from 'react';

export default class NumberBox2 extends React.Component{
    
    state={
        count:this.props.initialValue,
    }

    render(){
        return(
            <React.Fragment>
            <div onClick={this.click} style={{
                border:"1px solid black",
                padding:"10px",
                width:"20px",
                textAlign: 'center',
                fontSize: `${10+this.state.count * 5}px`,
                color: this.state.count === 1? 'green' : this.state.count === 6? 'red' : 'black'
                }}> 
                {this.state.count}
            </div>
            {this.state.count % 2 === 0? <p>Number is even</p> : <p>Number is odd</p>}
            </React.Fragment>
        )
    }
}

