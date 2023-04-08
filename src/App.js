import './App.css';
import Nav from './Navigation/Nav';
import Footer from './Footer/Footer';
import Myproducts from './Myproducts/Myproducts';
import Contact from './Contactpg/Contact';
import Cart from './Cart/Cart';
import Login from './Loginpage/Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notify from './Alert/Notify';
import { sendCatData } from './Store/Cart_slice';



function App() {
  const dispatch=useDispatch()
  const cart=useSelector(state=>state.cart)
  const isloggedIn=useSelector(state=>state.auth.isloggedIn);
  const notifying=useSelector(state=>state.notice.notification)
  // let firstApper=true
  useEffect(()=>{
    // if(firstApper){
    //   firstApper=false
    //   return;
    // }
    dispatch(sendCatData(cart))
    // dataSend().catch(err=>{
    //   dispatch(notifyActions.showNotification({
    //     open:true,
    //     message:'Request failed',
    //     type:'error'
    //   }))
    // });
  },[cart,dispatch])
  return (
    <Router>
      <Fragment>
        <Nav/>
          {notifying && <Notify type={notifying.type} message={notifying.message}/>}
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
