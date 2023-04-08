import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className='login'>
            <div className='login__Container'>
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password" />

                    <button className='signIn'>Sign In</button>
                </form>

                <p>By signing-in you agree to Soulful Scrambles Cafe's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads</p>

                <button className='login__RegisterButton'>Sign-Up</button>

        </div>
        </div>
    )
}

export default Login