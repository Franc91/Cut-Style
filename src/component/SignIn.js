import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import firebase from "../config/fbConfig";
import { useHistory } from 'react-router-dom'

const SignIn = (props) => {                 //przekazanie propsa z rodzica
    
    const history = useHistory();
    const [state, setState] = useState({
        email:'',
        password:'',
        alertMail:'',
        alertPass:'',
        fireError: '',
        error:{
            email: false,
            password: false
        }

    })

    const buttonStyle={
        marginTop: '1rem',
        backgroundColor: '#393D40'
    }

    const alertStyle={
        color: "red"
    }

    const handleOnChange=({target})=>{
        setState(prev => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setState(prev => ({
            ...prev,
            error: {
              ...prev.error,
              email: (prev.email.indexOf('@') > -1 && prev.email.length >= 3 )? false : true,
              password: prev.password.length > 5 ? false : true
            } 
        }))
        firebase.auth().signInWithEmailAndPassword(state.email, state.password)
        .then((user)=>{
            props.setUser(user);
            history.push('/')               //historia do zmiany elementów po zalgowaniu taki redirect
            console.log('zalogowano', firebase.auth().currentUser.uid, firebase.auth().currentUser.email, firebase.auth().currentUser.name)})
        .catch((error)=>{
            setState(prev=>({
                ...prev,
                fireError: error.message
            })
        )
    })
    
    }
    return (
        <div className="SignIn divStyle"  >
            <form className="signInForm formStyle" onSubmit={handleOnSubmit}> {/*novalidate*/}
            {
                state.fireError ? <div>{state.fireError}</div> : null
            }
                <TextField 
                type="email" 
                label="e-mail" 
                name="email"
                id="email" 
                value={state.email} 
                onChange={handleOnChange}/>
                <p style={alertStyle}>{state.error.email && "Email powinien zawierać co najmniej 3 znaki oraz @"}</p>
                <TextField 
                type="password" 
                label="Hasło" 
                name="password"
                id="password" 
                value={state.password}
                onChange={handleOnChange}/>
                <p style={alertStyle}>{state.error.password && "Hasło powinno zawierać min 5 znaków "}</p>
                <Button
                    type="submit"
                    style={buttonStyle}
                    variant="contained"
                    color="primary"
                    className='signUpBtn actionBtn'
                    endIcon={<SendIcon>send</SendIcon>}
                > 
                Zaloguj
                </Button>
                <div className="auth-error">
            
                </div>
            </form>

        </div>
    )
}
  
export default SignIn
