import React from 'react';
import {useState} from 'react'
import { authService } from '../fbase';

const Auth =  () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const[error,setError] = useState("");

    const onChange = (event) => {
        const {name,value} = event.target;
        if(name ==='email'){
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value)
        }
    };

    const onSubmit = (event) => {
    event.preventDefault();
    try{
        let data;
    if(newAccount){
    data = authService.createUserWithEmailAndPassword(email,password);
    }else {
    data = authService.signInwithEmailAndPassword(email, password);
        }
        console.log(data);
     } catch(error) {
        
    }
};


return (
<div>
    <form onSubmit = {onSubmit}>
        <input onChange = {onChange} name='email' type = 'text' placeholder='Email' required value={email} />
        <input onChange = {onChange} name='password' type = 'password' placeholder='password' required value={password}/>
        <input type = 'submit' value='Log In' value ={newAccount? 'Create Account' : 'Log In'} />

    </form>
    <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
    </div>

</div>
)
}


export default Auth;