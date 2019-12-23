import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';


export class SignUp extends Component {
    style={
        name:'',
        surname:'',
        email:'',
        password:'',
        rePassword:''

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
            transform: "translateX(-50%)"
        })
    }

    get divStyle (){
        return({
            position: 'relative'
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
            <div className="SignUp row" style={this.divStyle} >
                <form style={this.formStyle}>
                    <TextField type="text" label="Imię" name="name" onChange={this.handleOnChange}/>
                    <TextField type="text" label="Nazwisko" name="surname" onChange={this.handleOnChange}/>
                    <TextField type="email" label="e-mail" name="email" onChange={this.handleOnChange}/>
                    <TextField type="password" label="Hasło" name="password" onChange={this.handleOnChange}/>
                    <TextField type="password" label="Powtórz hasło" name="rePassword" onChange={this.handleOnChange}/>
                    <Button
                        style={this.buttonStyle}
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
}

export default SignUp
