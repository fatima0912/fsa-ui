
import React, { useContext, useState } from 'react';
import userService from './Services/userService';
import ShouldRender from './utils/ShouldRender';
import { useNavigate } from "react-router-dom";
import UserContext from './context/UserContext';

const Login = () => {

      const [user, setUser] = useState({ email: '', password: ''});
      const [error, setError] = useState(false);
      const navigate= useNavigate();
        const {setLogIn } = useContext(UserContext);
       const  onTextChange = (e) =>{
        const newUser = {...user, [e.target.name]: e.target.value };
        setUser( newUser );
    }

    const onLogin = async (evt) =>{
        evt.preventDefault();
        try{
            const res= await userService.login(user);
            const userInfo = res.data;
            // console.log(userInfo);
            userService.saveUser(userInfo);
            setLogIn(true); 

            if(userInfo.role === 0)
            navigate('/users/update');
            else
            navigate('/users');
            //console.log(res.data);
            //this.props.history.push('/users');
        }catch(e){
            setError( true );
            console.log(e, 'error');
        }
            
    }

       return <div className="col-md-4 m-3">
           <ShouldRender cond = {error}>
               <div className="alert alert-danger">
                   Wrong username or password
               </div>
               </ShouldRender> 
               <form onSubmit={onLogin}>
               <h1>Login</h1>
           <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input autoFocus onChange={onTextChange}  name="email" type="email" class="form-control" id="email" />
        </div>
        <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input onChange={onTextChange} name="password" type="password" class="form-control" id="password" />
        </div>
        <div class="mb-3">
            <button type = "submit" class="btn btn-primary">Login</button></div>
        </form>
        </div>
    }


export default Login;