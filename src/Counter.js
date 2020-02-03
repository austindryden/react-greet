import React from 'react';

class Counter extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            value:props.initialValue,
            increment: props.increment
        };
    }

    render() {
        return (
            <div className="card">
                <h1>{this.state.value}</h1>
                
                <button onClick={this._incrementValue}>Plus Plus!</button>
                <button onClick={this._decrementValue}>Minus Minus!!</button>
                <button onClick={this._resetValue}>reset</button>


            </div>
        );
    }

    _incrementValue = () => {
        this.setState({
        value : this.state.value + this.state.increment
    });};

    _decrementValue = () => {
        this.setState({
            value : this.state.value - this.state.increment
        });};

    _resetValue = () => {
        this.setState({
            value : this.props.initialValue
        });};

}

export default Counter;