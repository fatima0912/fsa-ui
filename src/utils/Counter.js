import {Component} from "react";
 
class Counter extends Component{
  
  state = { count : this.props.count };
  inc = () => {
      let cnt = this.state.count;
      this.setState({ count: cnt+1});
  }
  
  dec = () => {
      let cnt = this.state.count;
      this.setState({ count: cnt - 1 });
  }
  // if u go with normal function u will end up with errors inc() without arrow will not chnage values
    render(){
        return <div>
            <button onClick={this.inc}>+</button>
            <h4>{this.state.count}</h4>
            <button onClick= {this.dec}>-</button>
        </div>
    }
 };

 export default Counter;