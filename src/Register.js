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
            <div className= "mb-3">
                <h3>Register</h3>
                <hr/>
                </div>
            <div className="mb-3">
    <label htmlFor="fName" class = "form-label">First name</label>
    <input autoFocus name="firstName" value={this.state.firstName} onChange={this.onTextChange} type="text" className="form-control" id="fName" />
   <ShouldRender cond ={!this.state.user.firstName}>
   <span className="text-danger">Required</span>
   </ShouldRender>
    <ShouldRender cond={this.state.user.firstName && this.state.user.firstName.length < 3 }> 
    <span className="text-danger">Min 3 chars</span>
    </ShouldRender>
    </div>
    <div className="mb-3">
    <label htmlFor="lName" class = "form-label">last name</label>
    <input name="lastName" value={this.state.lastName} onChange={this.onTextChange}  type="text" className="form-control" id="lastName" />
    <ShouldRender cond={!this.state.user.lastName}>
        <span className="text-danger">Required</span>
    </ShouldRender>
    </div>
    <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input name="email" value={this.state.email} onChange={this.onTextChange}  type="email" className="form-control" id="email" />
    <ShouldRender cond={!this.state.user.email}>
        <span className="text-danger">Required</span>
    </ShouldRender>
    <ShouldRender cond={this.state.user.email && !this.state.user.email.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)}>
    <span className="text-danger">Invalid Email</span>
    </ShouldRender>
  </div>
 
  <div className="mb-3">
    <label className="form-label" htmlFor="pwd">Password</label>
    <input name="password" value={this.state.password} onChange={this.onTextChange}  type="password" className="form-control" id="pwd" />
    <ShouldRender cond={!this.state.user.password}>
        <span className="text-danger">Required</span>
    </ShouldRender>
  </div>
  <div className="mb-3">
      <button onClick ={this.onRegister} disabled = {this.isInvalid()} className="btn btn-danger">Register</button>

  </div>
        </div>
    // add loader once u click on register n once its success it shouldnt show up
    }
}

export default Register;