import './App.css';
import Nav from './Navigation/Nav';
import Footer from './Footer/Footer';
import Myproducts from './Myproducts/Myproducts';
import Login from './Loginpage/Login'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Fragment } from 'react';


function App() {
  return (
    <Router>
      <Fragment>
        <Nav/>
        {/* <Login/> */}
        <Myproducts/>
        <Footer/> 
      </Fragment>
    </Router>
  );
}

export default App;
