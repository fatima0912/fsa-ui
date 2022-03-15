import { Component } from "react";
import Header from "../Header";


class AutoCounter extends Component{
    
        state = {count: 0}; 
       
     constructor() {
            super();
            setInterval (()=>{
                const cnt = this.state.count;
                this.setState({count: cnt + 1 });
            }, 1000);
        }
        
        render(){
            return <div>
                <h1>{this.state.count}</h1>
            <Header/>
            </div>
        }
};

export default AutoCounter;