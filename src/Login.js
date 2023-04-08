import React, { useState } from 'react';
import './Login.css'

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signIn = (e) => {
        e.preventDefault();

    }

    const register = (e) => {
        e.preventDefault();
    }

    return (
        <div className='login'>
            <div className='login__Container'>
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=> setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=> setPassword(e.target.value)} />

                    <button type="submit" className='signIn' onClick={signIn}>Sign In</button>
                </form>

                <p>By signing-in you agree to Soulful Scrambles Cafe's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads</p>

                <button className='login__RegisterButton' onClick={register}>Sign-Up</button>

        </div>
        </div>
    )
}

export default Login