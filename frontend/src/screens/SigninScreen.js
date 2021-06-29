import React ,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { signin } from '../JS/actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


const SigninScreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    const usersignin = useSelector((state) => state.userSignin);
    const {userInfo ,loading ,error} = usersignin;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password))
    }
     useEffect(() => {
        if(userInfo){
            props.history.push(redirect);
        }
     }, [props.history , redirect , userInfo]);

    return (
        <div> 
            
            <form onSubmit={submitHandler} className="form">
           
               <div>
                   <h1>Sign In</h1>
               </div>
               {loading? <LoadingBox></LoadingBox> :
               error && <MessageBox variant='danger'>{error}</MessageBox>}

               <div>
                   <label htmlFor="email">Email address</label>
                   <input
                     type="email"
                     id="email"
                     placeholder="enter email"
                     required
                     onChange={(e) =>setEmail(e.target.value)}
                   ></input>
               </div>
               <div>
                   <label htmlFor="password">password</label>
                   <input
                     type="password"
                     id="password"
                     placeholder="enter password"
                     required
                     onChange={(e) =>setPassword(e.target.value)}
                   ></input>
               </div>
               <div>
                   <label />
                   <button type="submit" className="primary">Sign In</button>
               </div>
               <div>
                   <label />
                   <div>
                       New customer? {' '}
                       <Link to={`/register?redirect=${redirect}`}>Create your account</Link>
                   </div>
               </div>
            </form>
        </div>
    )
}

export default SigninScreen
