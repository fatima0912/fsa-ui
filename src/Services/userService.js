import axios from './httpService';

 const getHeaders = () =>{
    const userFromLocalStorage = localStorage.getItem('user');
    const json = JSON.parse(userFromLocalStorage) || {};
    const token = json.token;
    const headers = {
        authorization: `Bearer ${token}`
    };
    return headers;
 };
const login = (user) => {
    return axios.post('/users/signin', user);
}

const register = (user) =>{
    return axios.post('/users/signup', user);    
}
   
const saveUser = (user) =>{
    localStorage.setItem('user',JSON.stringify(user));
}

const update =(user) =>{
    return axios.put(`/users/${user.email}`, user, {headers: getHeaders()});
};

const getUser = (email) =>{
    return axios.get(`/users/${email}`, {headers: getHeaders()})
}

const getUserFromStorage = () =>{
    const data = localStorage.getItem('user');
    return JSON.parse(data);
}

const getUsers = (page, size, search, degree, sort, sortDir) =>
{
    const url= `/users/page/${page}/size/${size}?name=${search}`;
    if (degree !== '') 
    url = `${url}&degree=${degree}`; 
    //if(degree) we r not taking this cuz degree has "0" zero value u will get undefined
    if(sort !== '')
    url = `${url}&sort=${sort}&sortDir=${sortDir}`; 
    return axios.get(url, 
        {headers: getHeaders()});
}

export default { login, 
                 saveUser,
                 getUsers, 
                 register,
                 update, 
                 getUser, 
                 getUserFromStorage
                };
