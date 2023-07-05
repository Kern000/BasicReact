import React from 'react';

export default class AlertBox extends React.Component{

    state={
        message:this.props.initial
    }

    render(){
        return(
            <div style={{
                border: '4px solid black',
                padding: '3px',
                textAlign: 'center'
            }}>
            {this.state.message}
            </div>
        )
    }
}