import Home from './Home';
import Contact from './Contact';
import About from './About';
import UserList from './User/UserList';
//import NotFound from './NotFound';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Register from './Register';
import Login from './Login';

const AppRoutes = () =><BrowserRouter>
<Header />

<Routes>
    <Route path ='/' element ={<Home/>} />
    <Route path ='/Users' element ={<UserList/>} />
    <Route path ='/About' element ={<About/>} />
    <Route path ='/Contact' element ={<Contact/>} />
 {/*<Route path ='*' element ={<Home/>} />
 <Route path = "*" element= {<NotFound />} />*/}
 <Route path='/Register' element = {<Register/>}/>
 <Route path='/Login' element = {<Login />}/>
    <Route path ='*' element ={<Navigate to = "/"/>} />
 </Routes>
 <Footer />
 </BrowserRouter>

 export default AppRoutes;