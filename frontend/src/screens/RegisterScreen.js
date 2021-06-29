import React ,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { register } from '../JS/actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


const RegisterScreen = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    const userRegister = useSelector((state) => state.userRegister);
    const {userInfo ,loading ,error} = userRegister;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert('password and confirm password are not the same');
        }else{
            dispatch(register(name,email, password));
        }
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
                   <h1>Create a new account</h1>
               </div>
               {loading? <LoadingBox></LoadingBox> :
               error && <MessageBox variant='danger'>{error}</MessageBox>}

               <div>
                   <label htmlFor="name">Name</label>
                   <input
                     type="text"
                     id="name"
                     placeholder="enter name"
                     required
                     onChange={(e) =>setName(e.target.value)}
                   ></input>
               </div>
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
                   <label htmlFor="confirmPassword"> confirm password</label>
                   <input
                     type="password"
                     id="confirmPassword"
                     placeholder="enter confirm password"
                     required
                     onChange={(e) =>setConfirmPassword(e.target.value)}
                   ></input>
               </div>
               <div>
                   <label />
                   <button type="submit" className="primary">Register</button>
               </div>
               <div>
                   <label />
                   <div>
                       already have an account? {' '}
                       <Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
                   </div>
               </div>
            </form>
        </div>
    )
}

export default RegisterScreen
