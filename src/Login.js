import React from "react";

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state={
            user: {
                email:'',
                password:''
            }
        }
    }
    render(){
       return <div className="col-md-5"> 
           <div class="mb-3">
        <label for="email">Email</label>
        <input name="email" type="email" class="form-control" id="email" />
        </div>
        <div class="mb-3">
        <label for="password">Password</label>
        <input name="password" type="password" class="form-control" id="password" />
        </div>
        <div class="mb-3">
            <button class="btn btn-primary">Login</button></div>
        </div>
    }
}

export default Login;