import React,{useRef, useState} from 'react'
import Header from './Header';
import {checkValidData} from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null); 

    const handleButtonClick =() =>{
        const name = nameRef?.current?.value;
        const email = emailRef?.current?.value;
        const password = passwordRef?.current?.value;

        const message = checkValidData(name, email, password);
        setErrorMessage(message);

        if(message ) return;

        //Sign / Sign Up
        if(!isSignInForm){
            //Sign Up Logic
            createUserWithEmailAndPassword(
                auth, 
                email, 
                password
            )
            .then((userCredential)=>{
                const user = userCredential.user;
                updateProfile(user , {
                    displayName: name, 
                    photoURL: USER_AVATAR,
                  }).then(() => {
                    // Profile updated!
                    // ...
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                     dispatch(
                        addUser({
                            uid: uid,
                            email:email, 
                            displayName:displayName, 
                            photoURL:photoURL
                        })
                    );
                    // navigate("/browse");

                  }).catch((error) => {
                    // An error occurred
                    // ...
                    setErrorMessage(error.message);
                  })
                console.log(user);
                
                
            })
            .catch((error)=>{
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage)
            })
        } else {
            //Sign In Logic

              signInWithEmailAndPassword(
                auth, 
                email, 
                password
            )
              .then((userCredential)=>{
                //
                const user = userCredential.user;
                console.log(user);
                navigate("/browse");
              })
              .catch((error)=>{
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
              });
        }
    };

    
    const toggleSignInForm =() =>{
        setIsSignInForm(!isSignInForm);
    }
 
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img className='' src={BG_URL} alt='Backgorund Image'/>
        </div>
        <form 
        onSubmit={
            (e) =>
                e.preventDefault()
        } 
            className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>
            {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
           
        {!isSignInForm && (
           
            <input 
                ref={nameRef}
                type='text' 
                placeholder='Enter your Name' 
                className='p-2 m-2 w-full bg-gray-800'
            />
        
        )}
            <input 
                ref={emailRef}
                type='email' 
                placeholder='Emil Address' 
                className='p-2 m-2 w-full bg-gray-800'
            />
            <input 
                ref={passwordRef}
                type='password' 
                placeholder='Password' 
                className='p-2 m-2 w-full bg-gray-800'
            />
            <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

            <button className='py-4 mx-2 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                {isSignInForm 
                ? "Sign Up Now " : "Allready Registerd ? Sign In Now"}
            </p>
        </form>
    </div>
  )
}

export default Login