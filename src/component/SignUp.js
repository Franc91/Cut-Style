import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import firebase from "../config/fbConfig";

const SignUp = () => {
    const [state, setState]= useState({
        name:'',
        surname:'',
        email:'',
        password:'',
        rePassword:'', 
        fireError: '',
        loginBtn: true, 
        error:{
            name: false,
            surname: false,
            email: false,
            password:false
        }

    })

    const formStyle={
            display: "flex",
            flexDirection: "column",
            alignItem: "center",
            justifyContent: "center",
            position: "absolute",
            left: "50%",
            top: "50%",
            width: "50%",
            transform: "translateX(-50%) translateY(-50%)",
    }

    const divStyle ={
        
            position: 'relative',
            height: '65vh',
            marginBottom: 10
    }

    const buttonStyle={
        
            marginTop: '1rem'
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
        console.log(state)
        setState(prev => ({
            ...prev,
            error: {
              ...prev.error,
              email: (prev.email.indexOf('@') > -1|| prev.email.length >= 3 )? false : true,
              password: (prev.password === prev.rePassword && prev.password.length < 5) ? true : false ,
              name: prev.name < 5 ? true : false,
              surname: prev.surname < 5 ? true : false
            } 
        }))
        firebase.auth().createUserWithEmailAndPassword(state.email, state.password).then(()=>{console.log('zarejstrowano')})
        .catch((error)=>{
            setState(prev=>({
                ...prev,
                fireError: error.message
            })
        )
    })
}

    return (
        <div className="SignUp row" style={divStyle} >
            <form style={formStyle} onSubmit={handleOnSubmit}>
                {
                    state.fireError ? <div>{state.fireError}</div> : null
                }
                <TextField 
                type="text" 
                label="Imię" 
                name="name" 
                value={state.name} 
                onChange={handleOnChange}/>
                <p style={alertStyle}>
                    {
                        state.error.name && "Imie powinno mieć wiecej niż 5 znaków"
                    }
                </p>
                <TextField 
                type="text" 
                label="Nazwisko" 
                name="surname" 
                value={state.surname}
                onChange={handleOnChange}/>
                <p style={alertStyle}>
                    {
                        state.error.surname && "Nazwisko powinno mieć wiecej niż 5 znaków"
                    }
                </p>
                <TextField 
                type="email" 
                label="e-mail" 
                name="email"
                value={state.email}
                onChange={handleOnChange}/>
                <p style={alertStyle}>
                    {
                        state.error.email && "Email powinien zawierać co najmniej 3 znaki oraz @"
                    }
                </p>
                <TextField 
                type="password" 
                label="Hasło" 
                name="password" 
                value={state.password}
                onChange={handleOnChange}/>
                <p style={alertStyle}>
                    {
                        state.error.password && "Hasła nie są takie same lub hasło zawiera mniej niż 5 znaków"
                    }
                </p>
                <TextField 
                type="password" 
                label="Powtórz hasło" 
                name="rePassword"
                value={state.rePassword} 
                onChange={handleOnChange}/>
                <p style={alertStyle}></p>
                <Button
                    type="submit"
                    style={buttonStyle}
                    variant="contained"
                    color="primary"
                    className='signUpBtn'
                    endIcon={<SendIcon>send</SendIcon>}
                > 
                Zarejestruj
                </Button>
            </form>
        </div>
    )
}

export default SignUp