import React from 'react';

export default class NumberBox extends React.Component{
    
    state={
        count:this.props.initialValue,
        randomNumber:Math.floor(Math.random()*6 + 1)
    }

    clickUp = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    clickDown = () =>{
        this.setState({
            count: this.state.count - 1
        })
    }

    clickRandom = () => {
        this.setState({
            randomNumber: Math.floor(Math.random()*6 + 1)
        })
    }

    render(){
        return(
            <React.Fragment>
            <div onClick={this.click} style={{
                border:"1px solid black",
                padding:"10px",
                width:"20px"
                }}> 
                {this.state.count}
            </div>
            <div>
                <button className='button' onClick={this.clickUp}> Increase </button>
                <button className='button' onClick={this.clickDown}> Decrease </button>
            </div>
            <div onClick={this.clickRandom} style={{
                height:'150px',
                width: '250px',
                border: "1px solid black",  
                paddingTop: '50px',
                boxSizing: 'border-box',
                textAlign: 'center',
            }}>
                Random Box
                <br/>
                {this.state.randomNumber}
            </div>
            </React.Fragment>
        )
    }
}