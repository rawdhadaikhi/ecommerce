import { applyMiddleware ,createStore , compose, combineReducers } from 'redux';
import thunk  from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { orderCreateReducer, orderDetailsReducer } from './reducers/orderReducers';
import  {productListReducer, productDetailsReducer } from './reducers/productReducers';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers';

const initialState = {
    userSignin :{
       userInfo : localStorage.getItem('userInfo') 
       ? JSON.parse(localStorage.getItem('userInfo')) 
       :null,
    },
    cart : {
        cartItems: localStorage.getItem('cartItems') 
        ? JSON.parse(localStorage.getItem('cartItems')) 
        :[],
        shippingAddress : localStorage.getItem('shippingAddress') ?
        JSON.parse(localStorage.getItem('shippingAddress')) :
        {},
        paymentMethod : 'COD (cash on delivery)',
    },
};

const reducer =combineReducers({
    productList : productListReducer,
    productDetails : productDetailsReducer,
    cart:cartReducer,
    userSignin : userSigninReducer,
    userRegister : userRegisterReducer,
    orderCreate : orderCreateReducer,
    orderDetails : orderDetailsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)));

export default store