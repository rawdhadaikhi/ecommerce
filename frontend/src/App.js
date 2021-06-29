import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import { signout } from './JS/actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';

const App =(props) =>{
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
     const usersignin = useSelector((state) => state.userSignin);
     const {userInfo} = usersignin;
     const dispatch = useDispatch();

 const signoutHandler = () =>{
   dispatch(signout());
 }
 const [openSide, setopenSide] = useState(false)
 const openMenu = () =>{
    setopenSide(! openSide);
 }
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row sidebar">
         <div>
             <button onClick={openMenu}>&#9776;</button>
             {openSide ? props.children : null}

             <Link to="/" className="brand">TheSweetGarden</Link>
         </div>
         <div>
             <Link to="/cart">Cart
             {
               cartItems.length > 0 && (
                 <span className="badge">{cartItems.length}</span>
               )
             }
             </Link>
             {
               userInfo ? 
               (
               <div className="dropdown">
                <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <Link to= "#signout" onClick={signoutHandler}>
                    Sign Out
                  </Link>
                </ul>
               </div>
               )
               :
               (<Link to="/signin">Sign In</Link>)
             }
         </div>
    </header>
    <aside className="side">
       <h3>Shopping Categories</h3>
        <ul>
          <li>
            <Link to="/plante-artificielle">plantes artificielles</Link>
          </li>
          <li>
            <Link to="/plante-coin">plantes de coin</Link>
          </li>
          <li>
            <Link to="/cactus">cactus</Link>
          </li>
        </ul>
    </aside>
    <main>
      <Route path="/cart/:id?" component={CartScreen}></Route>
      <Route path="/product/:id" component={ProductScreen} ></Route>
      <Route path="/signin" component={SigninScreen}></Route>
      <Route path="/register" component={RegisterScreen}></Route>
      <Route path="/shipping" component={ShippingAddressScreen}></Route>
      <Route path="/payment" component={PaymentScreen}></Route>
      <Route path="/place-order" component={PlaceOrderScreen}></Route>
      <Route path="/order/:id" component={OrderScreen}></Route>
      <Route path="/" component={HomeScreen} exact ></Route>
    </main>
    <footer className="row center">
      All rights reserved.
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
