import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';


export class SignIn extends Component {
    state={
        email:'',
        password:'',
        alertMail:'',
        alertPass:'',
        error:{
            email: false,
            password: false
        }

    }
    get formStyle(){
        return({
            display: "flex",
            flexDirection: "column",
            alignItem: "center",
            justifyContent: "center",
            position: "absolute",
            left: "50%",
            width: "50%",
            transform: "translate(-50%,-50%)",
            top: "50%"
        })
    }

    get divStyle (){
        return({
            position: 'relative',
            height: '15rem'
        })
    }

    get buttonStyle(){
        return({
            marginTop: '1rem'
        })
    }

    get alertStyle(){
        return({
            color: "red"
        })
    }

    handleOnChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,       
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        this.setState(prev => ({
            ...prev,
            error: {
              ...prev.error,
              email: (this.state.email.indexOf('@') > -1 && this.state.email.length >= 3 )? false : true,
              password: this.state.password.length > 5 ? false : true
            } 
        }))
    }


 
    render() {
        return (
            <div className="SignIn row" style={this.divStyle} >
                
                <form style={this.formStyle} onSubmit={this.handleOnSubmit}>
                    <TextField type="email" label="e-mail" name="email" value={this.state.email} onChange={this.handleOnChange}/>
                    <p style={this.alertStyle}>{this.state.error.email && "Email powinien zawierać co najmniej 3 znaki oraz @"}</p>
                    <TextField type="password" label="Hasło" name="password" value={this.state.password} onChange={this.handleOnChange}/>
                    <p style={this.alertStyle}>{this.state.error.password && "Hasło powinno zawierać min 5 znaków "}</p>
                    <Button
                        type="submit"
                        style={this.buttonStyle}
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
}

export default SignIn
