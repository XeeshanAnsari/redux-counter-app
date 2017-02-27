import React ,{ Component } from 'react';



class Counter extends Component{
    
    

    
increment() {
    this.props.increment();
}
decrement() {
    this.props.decrement();
}




    render(){
        return (
            <div>
             <h2>Counter :{this.props.counter }</h2>
              <button onClick={this.increment.bind(this)} >Increment 1 Time</button>
              <button onClick={this.decrement.bind(this)} >Decrement 1 Time</button>
              
            </div>
        )
    }
}

export default Counter;