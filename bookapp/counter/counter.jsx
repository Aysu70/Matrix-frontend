import React,{Component } from 'react';

export class App extends Component{
  constructor(){
    super();
    this.state={
      count: 0
    }
  }
  decrement=()=>{
    if(this.state.count!==0){
      this.setState({count: this.state.count-1})
    }
  }
  increment=()=>{
    this.setState({count: this.state.count+1})
  }
  render(){
    return(
      <div>
      <button onClick={this.decrement}>-</button>
      <span>{this.state.count}</span>
      <button onClick={this.increment}>+</button>
      </div>  
    )
  }
}

// Log to console
console.log('Hello console')