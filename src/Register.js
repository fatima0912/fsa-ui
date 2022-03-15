import React from "react";
import axios from "axios";
import Error from "./utils/Error";
import ShouldRender from "./utils/ShouldRender";


class Register extends React.Component {

        state= {
            user:{
            firstName: '',
            lastName:'',
            email:'',
            password:''
        },
            success:false,
            error: false, 
            userExist: false
        
    }; 

onRegister =() => {
 axios.post('https://node-api-fsa.herokuapp.com/api/users/signup', this.state.user)
  .then(res => 
        this.setState({firstName:'', lastName:'', email:'',password:'',success:true, error: false, userExist: false}))
  .catch(err =>{ 
    if(err.message.indexOf('409')>-1) this.setState({userExist: true, success: false}) 
    else this.setState({error: true, success: false });
  });

}

onTextChange =(evt) =>{
  const newUser = {...this.state.user,[evt.target.name]:evt.target.name};
    this.setState({user:newUser});

}   

isInvalid =() =>{
    return !this.state.user.firstName
        || !this.state.user.lastName
        || !this.state.user.email
        || !this.state.user.password
        
}
 
render() {
    return <div class ="m-3 col-md-5">
            <ShouldRender cond={this.state.success}>
                <div class =" mb-3 alert alert-success">
                    Successfully Registered
                </div>
            </ShouldRender>
                <ShouldRender cond ={this.state.userExist}>
                    <div class = "mb-3 alert alert-danger">
                        User already exists.
                    </div>
                    </ShouldRender>
                    <ShouldRender cond= {this.state.error}>
                        <Error />
                        </ShouldRender> 
            <div class= "mb-3">
                <h3>Register</h3>
                <hr/>
                </div>
            <div>
    <label for="fName" class = "form-label">First name</label>
    <input name="fName" value={this.state.firstName} onChange={this.onTextChange} type="text" class="form-control" id="fName" />
    <ShouldRender cond={!this.state.user.firstName && this.state.user.firstName.length < 3 }> 
    <span class="text-danger">Required</span>
    </ShouldRender>
    </div>
    <div>
    <label for="lName" class = "form-label">last name</label>
    <input name="lName" value={this.state.lastName} onChange={this.onTextChange}  type="text" class="form-control" id="lName" />
    <ShouldRender cond={!this.state.user.lastName}>
        <span class="text-danger">Required</span>
    </ShouldRender>
    </div>
    <div class="form-label">
    <label for="email">Email</label>
    <input name="email" value={this.state.email} onChange={this.onTextChange}  type="email" class="form-control" id="email" />
    <ShouldRender cond={!this.state.user.email}>
        <span class="text-danger">Required</span>
    </ShouldRender>
    <ShouldRender cond={this.state.user.email && !this.state.user.email.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)}>
    <span class="text-danger">Invalid Email</span>
    </ShouldRender>
  </div>
 
  <div class="form-label">
    <label for="password">Password</label>
    <input name="password" value={this.state.password} onChange={this.onTextChange}  type="password" class="form-control" id="password" />
    <ShouldRender cond={!this.state.user.password}>
        <span class="text-danger">Required</span>
    </ShouldRender>
  </div>
  <div class="mb-3">
      <button disabled={this.isInvalid()} className="btn btn-danger">Register</button>

  </div>
        </div>
    // add loader once u click on register n once its success it shouldnt show up
    }
}

export default Register;