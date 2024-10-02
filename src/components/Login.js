import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img className='' src='https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg' alt='Backgorund Image'/>
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>Sign In</h1>
            <input type='email' placeholder='Emil Address' className='p-2 m-2 w-full bg-gray-800'/>
            <input type='password' placeholder='Password' className='p-2 m-2 w-full bg-gray-800'/>
            <button className='py-4 mx-2 my-6 bg-red-700 w-full rounded-lg'>Sign In</button>
            <p className='py-4'>New to Netflix? Sign Up Now</p>
        </form>
    </div>
  )
}

export default Login