import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const SignIn = () => {
    const [state, setState] = useState({
        email:'',
        password:'',
        alertMail:'',
        alertPass:'',
        error:{
            email: false,
            password: false
        }

    })
    const formStyle = {
            display: "flex",
            flexDirection: "column",
            alignItem: "center",
            justifyContent: "center",
            position: "absolute",
            left: "50%",
            width: "50%",
            transform: "translate(-50%,-50%)",
            top: "50%"
    
    }

    const divStyle = {
        
            position: 'relative',
            height: '15rem'
    
    }

    const buttonStyle = {
        
            marginTop: '1rem'
    }

    const alertStyle = {
            color: "red"

    }


    //zrobi to na then
    // componentDidUpdate() {
    //     if (!this.state.error.password) {
    //         this.props.history.push("/app")
    //     }
    // }

    const handleOnChange=({ target })=>{
        console.warn(target.name)
        setState(prev => ({
            ...prev,
            [target.name]: target.value,       
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
    }
    console.warn(state)
        return (
            <div className="SignIn row" style={divStyle} >
                
                <form style={formStyle} onSubmit={handleOnSubmit} noValidate>
                    <TextField 
                    type="email" 
                    label="e-mail" 
                    name="email" 
                    value={state.email} 
                    onChange={handleOnChange}/>
                    <p style={alertStyle}>{state.error.email && "Email powinien zawierać co najmniej 3 znaki oraz @"}</p>
                    <TextField 
                    type="password" 
                    label="Hasło" 
                    name="password" 
                    value={state.password}
                    onChange={handleOnChange}/>
                    <p style={alertStyle}>{state.error.password && "Hasło powinno zawierać min 5 znaków "}</p>
                    <Button
                        type="submit"
                        style={buttonStyle}
                        variant="contained"
                        color="primary"
                        className='signUpBtn'
                        endIcon={<SendIcon>send</SendIcon>}
                    > 
                    Zaloguj
                    </Button>
                </form>
            </div>
        )
}

export default SignIn
