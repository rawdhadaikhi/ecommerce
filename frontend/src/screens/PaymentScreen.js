import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';
import { saveMethodPayment } from '../JS/actions/cartActions';

const PaymentScreen = (props) => {
    const cart = useSelector((state) => state.cart);
    const {shippingAddress} = cart;
    if(!shippingAddress.address){
        props.history.push('/shipping');
    }
    const [methodPayment, setMethodPayment] = useState('Aramex');
    const dispatch = useDispatch();

    const submitHandler =(e) => {
        e.preventDefault();
        dispatch(saveMethodPayment(methodPayment));
        props.history.push('/place-order');
    }
    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <form  className="form" onSubmit={submitHandler}>
              <div>
              <h3>cash on delivery</h3>    
              </div> 
              <div>
                <input type="radio"
                    id="cod"
                    name="cod"
                    value="cod"
                    checked
                    required 
                    onChange={(e) =>setMethodPayment(e.target.value)}/> 
                    <label htmlFor="cod">COD (cash on delivery)</label>
                <p>Delivery time: Delivery to your home wherever you are in Tunisia (in less than 48 hours)</p>
                <p>Delivery price :4,700 DT TTC</p>
                {/* <p>Transpoter : Aramex</p> */}
              </div>
              <div>
                  <label />
                  <button className="primary" type="submit">Continue</button> 
              </div>
            </form>
        </div>
    )
}

export default PaymentScreen
