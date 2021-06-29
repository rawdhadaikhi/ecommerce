import React ,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';
import { saveShippingAddress } from '../JS/actions/cartActions';

const ShippingAddressScreen = (props) => {
    const userSignin = useSelector((state) => state.userSignin);
    const cart = useSelector((state) => state.cart);
    const {shippingAddress} = cart;

    const {userInfo} = userSignin;
    if(!userInfo){
        props.history.push('/signin');
    }

    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);
    const dispatch = useDispatch();

    const submitHandler =(e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({
            fullName , address, city , postalCode , country
        }));
        props.history.push('/payment');
    }

    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
             <div>
                 <h1>Shipping Address</h1>
             </div>
             <div>
                 <label htmlFor="fullName">Full Name</label>
                 <input type="text"
                   placeholder=" enter full name"
                  id="fullName"
                  value={fullName}
                  onChange={(e) =>setFullName(e.target.value)}
                  required
                 ></input>
             </div>
             <div>
                 <label htmlFor="address">Address</label>
                 <input type="text"
                   placeholder=" enter address"
                  id="address"
                  value={address}
                  onChange={(e) =>setAddress(e.target.value)}
                  required
                 ></input>
             </div>
             <div>
                 <label htmlFor="city">City</label>
                 <input type="text"
                   placeholder=" enter city"
                  id="city"
                  value={city}
                  onChange={(e) =>setCity(e.target.value)}
                  required
                 ></input>
             </div>
             <div>
                 <label htmlFor="fullName">postal code</label>
                 <input type="text"
                   placeholder=" enter postal code"
                  id="postalCode"
                  value={postalCode}
                  onChange={(e) =>setPostalCode(e.target.value)}
                  required
                 ></input>
             </div>
             <div>
                 <label htmlFor="country">country</label>
                 <input type="text"
                   placeholder=" enter country"
                  id="country"
                  value={country}
                  onChange={(e) =>setCountry(e.target.value)}
                  required
                 ></input>
             </div>
             <div>
                <label />
                <button className="primary" type="submit">Continue</button> 
             </div>
            </form>
        </div>
    )
}

export default ShippingAddressScreen
