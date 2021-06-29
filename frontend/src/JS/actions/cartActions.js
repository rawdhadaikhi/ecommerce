import { ADD_CART_ITEM,
   REMOVE_CART_ITEM,
   CART_SAVE_SHIPPING_ADDRESS,
   CART_SAVE_PAYMENT_ADDRESS 
   } from "../constants/cartConstants";
import axios from 'axios';

export const addToCart =(productId,qty) =>async (dispatch ,getState) => {
  const {data} = await axios.get(`/api/products/${productId}`);
  dispatch({
      type: ADD_CART_ITEM,
      payload: {
          name: data.name,
          image: data.image,
          price: data.price,
          countInStock: data.countInStock,
          product :data._id,
          qty,
      }
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}
// remove from cart
export const removeFromCart =(productId) => async (dispatch,getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload:productId
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

// save shipping address
export const saveShippingAddress =(data) =>(dispatch) => {
  dispatch({  type : CART_SAVE_SHIPPING_ADDRESS , 
    payload: data
     });
     localStorage.setItem('shippingAddress', JSON.stringify(data));
}
// save payment method
export const saveMethodPayment = (data) =>(dispatch) => {
  dispatch({ type : CART_SAVE_PAYMENT_ADDRESS  , payload:data})
}