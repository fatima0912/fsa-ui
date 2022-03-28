import React from "react";
import userService from "./Services/userService";
import ShouldRender from "./utils/ShouldRender";
import Error from "./utils/Error";
class Register extends React.Component {
    state = {
        user: {
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
    userService.register(this.state.user)
    .then(res =>{ 
        this.setState({ firstName: '', lastName: '', email: '',password: '',
        success: true, error: false, userExist: false})
    })
  .catch(err =>{ 
    if(err.message.indexOf('409') > -1 ) this.setState({userExist: true, success: false}); 
    else this.setState({error: true, success: false });
  });
}


onTextChange = (evt) => {
    const newUser = {...this.state.user,[evt.target.name]: evt.target.value };
    this.setState({ user:newUser });
};  

isInvalid = () => {
    return !this.state.user.firstName
        || !this.state.user.lastName
        || !this.state.user.email
        || !this.state.user.password
        
};
 
render() {
    return <div class ="m-3 col-md-4">
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
            <div class="mb-3">
    <label for="fName" class = "form-label">First name</label>
    <input name="firstName" value={this.state.firstName} onChange={this.onTextChange} type="text" class="form-control" id="fName" />
   <ShouldRender cond ={!this.state.user.firstName}>
   <span class="text-danger">Required</span>
   </ShouldRender>
    <ShouldRender cond={this.state.user.firstName && this.state.user.firstName.length < 3 }> 
    <span class="text-danger">Min 3 chars</span>
    </ShouldRender>
    </div>
    <div class="mb-3">
    <label for="lName" class = "form-label">last name</label>
    <input name="lastName" value={this.state.lastName} onChange={this.onTextChange}  type="text" class="form-control" id="lastName" />
    <ShouldRender cond={!this.state.user.lastName}>
        <span class="text-danger">Required</span>
    </ShouldRender>
    </div>
    <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input name="email" value={this.state.email} onChange={this.onTextChange}  type="email" class="form-control" id="email" />
    <ShouldRender cond={!this.state.user.email}>
        <span class="text-danger">Required</span>
    </ShouldRender>
    <ShouldRender cond={this.state.user.email && !this.state.user.email.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)}>
    <span class="text-danger">Invalid Email</span>
    </ShouldRender>
  </div>
 
  <div class="mb-3">
    <label class="form-label" for="pwd">Password</label>
    <input name="password" value={this.state.password} onChange={this.onTextChange}  type="password" class="form-control" id="pwd" />
    <ShouldRender cond={!this.state.user.password}>
        <span class="text-danger">Required</span>
    </ShouldRender>
  </div>
  <div class="mb-3">
      <button onClick ={this.onRegister} disabled = {this.isInvalid()} className="btn btn-danger">Register</button>

  </div>
        </div>
    // add loader once u click on register n once its success it shouldnt show up
    }
}

export default Register;