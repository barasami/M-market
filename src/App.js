import './App.css';
import Nav from './Navigation/Nav';
import Footer from './Footer/Footer';
import Myproducts from './Myproducts/Myproducts';
import Contact from './Contactpg/Contact';
import Cart from './Cart/Cart';
import Login from './Loginpage/Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';



function App() {
  const isloggedIn=useSelector(state=>state.auth.isloggedIn);
  console.log(isloggedIn);
  const cartItems=useSelector((state)=>state.cart.list)
  console.log(cartItems);
  return (
    <Router>
      <Fragment>
        <Nav/>
          <Routes>
            {/* <Route path='/' element={isloggedIn && <Login/>}/> */}
            <Route path='/' element={isloggedIn && <Myproducts/>}/>
            <Route path='/contact' element={isloggedIn && <Contact/>}/>
            <Route path='/cart' element={isloggedIn && <Cart/>}/>
            <Route path='/logout' element={isloggedIn && <Login/>}/>
          </Routes>
        <Footer/> 
      </Fragment>
    </Router>
  );
}

export default App;
