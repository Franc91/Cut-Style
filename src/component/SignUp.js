import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import firebase from "../config/fbConfig";
import { useHistory } from 'react-router-dom'

const SignUp = (props) => {
    const history = useHistory();
    const [state, setState]= useState({
        name:'',
        surname:'',
        email:'',
        password:'',
        rePassword:'', 
        fireError: '',
        loginBtn: true, 
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

    const nameErr = (state.name.length > 5 )? true : false;
    const surNameErr = ( state.surname.length > 3) ? true : false;
    const mailErr = (state.email.indexOf('@') > -1 && state.email.length >= 3 )? true : false;
    const passErr = (state.password === state.rePassword && state.password.length > 5 ) ? true : false;
    const loginBtn = (nameErr & surNameErr & mailErr & passErr)? false : true 

    const handleOnChange=({target})=>{
        setState(prev => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(state)

        firebase.auth().createUserWithEmailAndPassword(state.email, state.password)
        .then((resp) => {
            const db = firebase.firestore();
            return db.collection('users').doc(resp.user.uid).set({
            profileName: state.name,
            profileSurname: state.surname,
            profileEmail: state.email,
            profilePassword: state.password
            })    
        })
        .then((user)=>{
            props.setUser(user);
            history.push('/')               //historia do zmiany elementów po zalgowaniu taki redirect
            console.log('zalogowano', firebase.auth().currentUser.uid, firebase.auth().currentUser.email, firebase.auth().currentUser.name)
        })
        .then(()=>{console.log('zarejstrowano nowego uzytkownika')})    
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
                       (!nameErr && state.name.length) ? "Imie powinno mieć wiecej niż 5 znaków" : null
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
                        (!surNameErr && state.surname.length)? "Nazwisko powinno mieć wiecej niż 5 znaków": null
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
                        (!mailErr && state.email.length)? "Email powinien zawierać co najmniej 3 znaki oraz @": null
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
                        (!passErr && state.password.length)? "Hasła nie są takie same lub hasło zawiera mniej niż 5 znaków": null
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
                    disabled={loginBtn} 
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