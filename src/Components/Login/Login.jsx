
import { useState } from 'react'
import './Login.css'
import { login , signup } from '../../FireBase';


function Login() {

    const[signState , setSignState] = useState('Sign in');
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const user_auth = async (event)=>{
        event.preventDefault()
        if(signState === 'Sign in'){
           await login(email , password);
        }else{
            await signup(name , email , password);
        }
    }
  
  return (

    <div>
        <div className='login'>
            <div className='login__cover'>
                <div className='login__nav'>
                <img className='login__navlogo'
                        src={`https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png`}
                        alt='Netflix Logo'
                    />
                </div>
            <div className='login__container'>
                <div className='login__content'>
                    <div className='login__head'><h1>{signState}</h1></div>
                    <div className='login__inputs'>
                        {
                            signState === 'Sign up' ? <input type='text' 
                            value={name} onChange={(e)=>{setName(e.target.value)}} 
                            className='login__email' placeholder='Name' /> : <></>
                        }
                        
                        <input type='email' 
                        value={email} onChange={(e)=>{setEmail(e.target.value)}} 
                        className='login__email' placeholder='Email' />

                        <input className='login__password' 
                        value={password} onChange={(e)=>{setPassword(e.target.value)}} 
                        type='password' placeholder='Password'/>
                        
                        <button className='login__button' type='submit' onClick={user_auth}>{signState}</button>
                        <div className='login__child'>
                           
                           <div><a className='login__need-help'>Need help?</a></div>
                        </div>
                    </div>
                </div>
                <div className='login__footer'>
                    
                    <div className='login__signup'>
                        {
                            signState === 'Sign in' ? <p>New to Netflix? <a onClick={()=>setSignState('Sign up')}>Sign up now.</a></p> :
                             <p className='mt-5'>Alredy Have an Account? <a onClick={()=>setSignState('Sign in')}>Sign in now.</a></p>
                        }
                        
                        </div>
                    <div className='login__final'>
                    This page is protected by Google reCAPTCHA to 
                    ensure youre not a bot. <a className='login__learnmore'>Learn more.</a>
                    </div>
                </div>
            </div>
            </div>
        </div>    </div>
  )
}

export default Login
