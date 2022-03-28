import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
// import NotFound from './NotFound';
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import UserList from './User/UserList';
import Footer from './Footer';
import Register from './Register';
import Login from './Login';
import UpdateUser from './UpdateUser';
import AutoCounter from './utils/AutoCounter';
import CounterWithHooks from './utils/CounterWithHooks';

const AppRoutes = () =>
<BrowserRouter>
<Header />
<Routes>
    <Route path ='/' element ={<Home />} />
    <Route path ='/About' element ={<About/>} />
    <Route path ='/Contact' element ={<Contact/>} />
    <Route path ='/users' element ={<UserList/>} />
    <Route path ='/users/update' element ={<UpdateUser/>} />
    <Route path ='/CounterWithHooks' element ={<CounterWithHooks />} />
 {/*<Route path ='*' element ={<Home/>} />
 <Route path = "*" element= {<NotFound />} />*/}
 <Route path='/Register' element = {<Register/>}/>
 <Route path='/Login' element = {<Login />}/>
 <Route path='/Counter' element = {<AutoCounter />}/>
  <Route path ='*' element ={<Navigate to = "/"/>}/>
 </Routes>
 <Footer />
 </BrowserRouter>

 export default AppRoutes; 