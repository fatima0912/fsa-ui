  
import { Component } from "react";
import Header from "../Header";


class AutoCounter extends Component{
    
        state = {count: 0}; 
       
     constructor() {
            super();
            this.interval = setInterval (()=>{
                const cnt = this.state.count;
                console.log `count is ${cnt}`
                this.setState({count: cnt + 1 });
            }, 1000);
        }
        
        static getDerivedStateFromProps(nextProps){
            return { skills: nextProps.skills };
        }
        shouldComponentUpdate=(prev, next)=>{
          if(next.count >5)
            return false;
          return true;
        }
        componentDidUpdate =() =>{
            console.log('Component did update');
        }
        render(){
            return <div>
                <h1>{this.state.count}</h1>
            <Header/>
            </div>
        }
        componentWillUnmount=() =>{
            clearInterval(this.interval);
        }

    };

export default AutoCounter;