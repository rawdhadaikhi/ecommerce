import {CREATE_ORDER_REQUEST,
    CREATE_ORDER_FAIL,
    CREATE_ORDER_SUCCESS,
    OREDER_DETAILS_REQUEST,
    OREDER_DETAILS_FAIL,
    OREDER_DETAILS_SUCCESS} from "../constants/orderConstants";

 import{CART_EMPTY} from '../constants/cartConstants';
 import axios from 'axios';


export const createOrder = (order) =>  async(dispatch , getState) =>{
 dispatch({
     type : CREATE_ORDER_REQUEST,
     payload : order
 })
 try {
     const {userSignin : {userInfo}} = getState();
    const {data} = await axios.post('/api/orders',order , {
        headers : {
           authorization :`Bearer ${userInfo.token}`,
        }
    })
    dispatch({  type :CREATE_ORDER_SUCCESS , payload:data});
    dispatch({ type :CART_EMPTY});
    localStorage.removeItem('cartItems');
 }
 catch(error){
     dispatch({
         type : CREATE_ORDER_FAIL,
        payload :error.response && error.response.data.message ?
        error.response.data.message : error.message
     })
   
 }
}

export const detailsOrder = (orderId) => async (dispatch, getState) => {
    dispatch({  type :OREDER_DETAILS_REQUEST , payload :orderId})

    try{
       const {userSignin : {userInfo}} = getState();
       const {data} = await axios.get(`/api/orders/${orderId}` , { 
           headers: { Authorization : `Bearer ${userInfo.token}`}
       })
       dispatch({  type :OREDER_DETAILS_SUCCESS , payload :data})
    }
    catch(error){
        const message =error.response && error.response.data.message ?
        error.response.data.message : error.message
        dispatch({type : OREDER_DETAILS_FAIL , payload :message})
    }
}