import React from 'react';
import AppRoutes from './AppRoutes';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'; 
//import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Register from './Register';
// import UserList from './User/UserList';
//import Home from './Home';
//import Name from './Name'; 
//import Counter from './utils/Counter';
//import AutoCounter from './utils/AutoCounter';
//import ProductList from './Product/ProductList';
//import ProductList1 from './Product/ProductList1';
//import Contact from './Contact';
//import About from './About';
//import NotFound from './NotFound';

function App()
{ return <AppRoutes />
        
     }
         /*
         <Header />
         <AutoCounter />
        <ProductList1 />
        <ProductList />
        <h1> Hello React</h1>
        <Counter count={1}/>
        <h1>Hello React</h1>
        <Name personName = "john" age ="20"/>
        <Name personName="joseph" age = "21" />
<img width = "200" height ="200" src= "D:\MERN\fsa-ui\public\photo-1561336313-0bd5e0b27ec8.jfif"/>
<UserList />
<Footer />
*/

export default App;