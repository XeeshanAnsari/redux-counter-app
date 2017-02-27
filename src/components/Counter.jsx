import React ,{ Component } from 'react';



class Counter extends Component{
    

    
updateCounter() {
    this.props.update();
}



    render(){
        return (
            <div>
             <h2>{this.props.counter}</h2>
              <button onClick={this.updateCounter.bind(this)} >Increment 1 Time</button>
            </div>
        )
    }
}

export default Counter;