import './App.css';
import Nav from './Navigation/Nav';
import Footer from './Footer/Footer';
import Myproducts from './Myproducts/Myproducts';
import Contact from './Contactpg/Contact';
import Cart from './Cart/Cart';
import Login from './Loginpage/Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';



function App() {
  const cart=useSelector(state=>state.cart)
  const isloggedIn=useSelector(state=>state.auth.isloggedIn);
  useEffect(()=>{
    const dataSend=async()=>{
      const resource=await fetch('https://reachme-ded7b-default-rtdb.firebaseio.com/cartItems.json',{
        method:'PUT',
        body:JSON.stringify(cart)
      })

      const mydata=await resource.json()

    }
    dataSend();
  },[cart])
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
