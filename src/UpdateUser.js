import React, { Component } from 'react';
import userService from './Services/userService';
import Chips from './utils/Chips';
import ShouldRender from './utils/ShouldRender';
import Error from './utils/Error';  
class UpdateUser extends Component {
    constructor(){
        super();

        console.log('Constructor ....');
    }
        componentDidMount(){
            console.log('componentDidMount..');
            const user = userService.getUserFromStorage();
            userService.getUser(user.email)
            .then(res => {
            this.setState({ user: res.data})
            })
            .catch(e => {
            console.log(e);
            this.setState({error:true});
    });
}

    state = {
        user:{
        email:'',
        firstName: '',
        lastname:'',
        qualification:'',
        degree:'',
        skills: []
        }
    };


    onValueChange = (e) =>{
        const user = {...this.state.user, [e.target.name]: e.target.value}
        this.setState({user});
    }

    onSkillsChange=(skills)=>{
        
        const user = {...this.state.user, skills};
        this.setState({ user });
    }
   
    onUpdate = async () => {
    try{
            await userService.update(this.state.user);
            this.setState({ error: false, success:true });
            
            setTimeout(() =>{
              this.setState({ success: false})      
            },3000);
            
            console.log('successfully updated');
        }catch(e){
            console.log(e);
            this.setState({error: true});
        }
    }
 
    componentWillUnmount(){
           console.log('unmounted');
       }
    render() { 
        const {firstName,degree, lastName, qualification, skills} = this.state.user;
        return <div className='col-md-4 m-3'>
            <ShouldRender cond = {this.state.error}>
                <Error />
            </ShouldRender>
            <ShouldRender cond = {this.state.success}>
               <div className="alert alert-success">Successfully Updated</div>
            </ShouldRender>
            
            <div className="mb-3">
            <h2> Update User Profile</h2> 
    <label for="fName" class = "form-label">First name</label>
    <input value={firstName} onChange={this.onValueChange} name="fName" type="text" className="form-control" id="fName" />
    </div>
    <div className="mb-3">
    <label for="lName" class = "form-label">Last name</label>
    <input name="lName" value={lastName} type="text" onChange={this.onValueChange} className="form-control" id="lName" />
    </div>      
    <div className="mb-3">
    <label for="degree" class = "form-label">Degree</label>
    <select value={degree} onChange={this.onValueChange} name="degree" className="form-control">
        <option value="">--Select--</option>
        <option value="0">B.E/B.Tech</option>
        <option value="1">Bcom</option>
        <option value="2">BCA</option>
        <option value="3">Others</option>
    </select>
    </div>      
    <div className="mb-3">
    <label for="qualification" class = "form-label">Qualification</label>
    <select value={qualification} onChange={this.onValueChange} name='qualification' className='form-control'>
    <option value="">--Select--</option>
        <option value="0">10+2</option>
        <option value="1">UG</option>
        <option value="2">PG</option>
    </select>
    </div>        
          <div className=" mb-3">  
             <label className="form-label">Skills</label>
              <Chips skills = {skills} onSkillsChange = {this.onSkillsChange} />
          </div>
          <div className="mb-3">   
        <button onClick={this.onUpdate} className='btn btn-success btn-sm'>Update</button>
    </div>
    </div>

    }
}
 
export default UpdateUser;
