import './App.css';
import Nav from './Navigation/Nav';
import Footer from './Footer/Footer';
import Myproducts from './Myproducts/Myproducts';
import Login from './Loginpage/Login'
import Contact from './Contactpg/Contact';
import Cart from './Cart/Cart';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Fragment } from 'react';


function App() {
  return (
    <Router>
      <Fragment>
        <Nav/>
          <Routes>
            <Route path='/products' element={<Myproducts/>}/>
            <Route path='/' element={<Login/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        <Footer/> 
      </Fragment>
    </Router>
  );
}

export default App;
