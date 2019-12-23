import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';


export class SignIn extends Component {
    style={
        email:'',
        password:''

    }
    get formStyle(){
        return({
            display: "flex",
            flexDirection: "column",
            alignItem: "center",
            justifyContent: "center",
            position: "absolute",
            left: "50%",
            width: "30%",
            transform: "translate(-50%,-50%)",
            top: "50%"
        })
    }

    get divStyle (){
        return({
            position: 'relative',
            height: "90vh"
        })
    }

    get buttonStyle(){
        return({
            marginTop: '1rem'
        })
    }

    handleOnChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="SignIn row" style={this.divStyle} >
                <form style={this.formStyle}>
                    <TextField type="email" label="e-mail" name="email" onChange={this.handleOnChange}/>
                    <TextField type="password" label="Hasło" name="password" onChange={this.handleOnChange}/>
                    <Button
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
