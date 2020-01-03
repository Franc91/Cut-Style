import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

export class SignUp extends Component {
    state={
        name:'',
        surname:'',
        email:'',
        password:'',
        rePassword:'',
        error:{
            name: false,
            surname: false,
            email: false,
            password:false
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
            top: "50%",
            width: "50%",
            transform: "translateX(-50%) translateY(-50%)",
        })
    }

    get divStyle (){
        return({
            position: 'relative',
            height: '40rem',
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
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.setState(prev => ({
            ...prev,
            error: {
              ...prev.error,
              email: (this.state.email.indexOf('@') > -1|| this.state.email.length >= 3 )? false : true,
              password: (this.state.password === this.state.rePassword ||
              this.state.password < 5) ? true : false ,
              name: this.state.name < 5 ? true : false,
              surname: this.state.surname < 5 ? true : false

            } 
        }))
    }
    render() {
        return (
            <div className="SignUp row" style={this.divStyle} >
                <form style={this.formStyle} onSubmit={this.handleOnSubmit}>
                    <TextField 
                    type="text" 
                    label="Imię" 
                    name="name" 
                    value={this.state.name} 
                    onChange={this.handleOnChange}/>
                    <p style={this.alertStyle}>
                        {
                            this.state.error.name && "Imie powinno mieć wiecej niż 5 znaków"
                        }
                    </p>
                    <TextField 
                    type="text" 
                    label="Nazwisko" 
                    name="surname" 
                    value={this.state.surname}
                    onChange={this.handleOnChange}/>
                    <p style={this.alertStyle}>
                        {
                            this.state.error.surname && "Nazwisko powinno mieć wiecej niż 5 znaków"
                        }
                    </p>
                    <TextField 
                    type="email" 
                    label="e-mail" 
                    name="email"
                    value={this.state.email}
                    onChange={this.handleOnChange}/>
                    <p style={this.alertStyle}>
                        {
                            this.state.error.email && "Email powinien zawierać co najmniej 3 znaki oraz @"
                        }
                    </p>
                    <TextField 
                    type="password" 
                    label="Hasło" 
                    name="password" 
                    value={this.state.password}
                    onChange={this.handleOnChange}/>
                    <p style={this.alertStyle}>
                        {
                            this.state.error.password && "Hasła nie są takie same lub hasło zawiera mniej niż 5 znaków"
                        }
                    </p>
                    <TextField 
                    type="password" 
                    label="Powtórz hasło" 
                    name="rePassword"
                    value={this.state.rePassword} 
                    onChange={this.handleOnChange}/>
                    <p style={this.alertStyle}></p>
                    <Button
                        type="submit"
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
