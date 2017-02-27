import React ,{ Component } from 'react';

import './index.css';

class Counter extends Component{
    
    constructor(props){
        super()
        this.state = {
            counterVal : 0
        }
    }

    valueChange(e){
    this.setState({counterVal: parseInt(e.target.value)});
  }
    
    increment() {
        this.props.increment();
    }
    decrement() {
        this.props.decrement();
    }
    incUpdateCounterWithInput(){
        this.props.incrementUpdate (this.state.counterVal);

    }
     decUpdateCounterWithInput(){
        this.props.decrementUpdate (this.state.counterVal);

    }




    render(){
        return (
            <div className='container'>
             <h2>Counter : {this.props.counter }</h2>
              <input type="number"  onChange={this.valueChange.bind(this)}/><br/>
              <div className='btn btn-group '>
                 <button className='btn btn-primary' onClick={this.incUpdateCounterWithInput.bind(this)} > Increment Update Counter with Input</button>
                <button className='btn btn-primary' onClick={this.decUpdateCounterWithInput.bind(this)} >Decrement Update Counter with Input</button>
                <button className='btn btn-primary' onClick={this.increment.bind(this)} >Increment 1 Time</button>
                <button className='btn btn-primary'onClick={this.decrement.bind(this)} >Decrement 1 Time</button>
              </div>
              
            </div>
        )
    }
}

export default Counter;