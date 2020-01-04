import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { connect } from 'react-redux';
import { signIn } from '../store/action/authAction'

class SignIn extends Component {
    state ={
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

    get divStyle(){
        return({
            position: 'relative',
            height: '20rem'
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


    //zrobi to na then
    // componentDidUpdate() {
    //     if (!this.state.error.password) {
    //         this.props.history.push("/app")
    //     }
    // }

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
        this.props.signIn(this.state)
    }
    render(){
        return (
            <div className="SignIn row" style={this.divStyle} >
                <form style={this.formStyle} onSubmit={this.handleOnSubmit}> {/*novalidate*/}
                    <TextField 
                    type="email" 
                    label="e-mail" 
                    name="email"
                    id="email" 
                    value={this.state.email} 
                    onChange={this.handleOnChange}/>
                    <p style={this.alertStyle}>{this.state.error.email && "Email powinien zawierać co najmniej 3 znaki oraz @"}</p>
                    <TextField 
                    type="password" 
                    label="Hasło" 
                    name="password"
                    id="password" 
                    value={this.state.password}
                    onChange={this.handleOnChange}/>
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
                    <div className="auth-error">
                        {this.props.authError? <p style={this.alertStyle}>{this.props.authError}</p> : null}
                    </div>
                </form>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
      authError: state.auth.authError
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      signIn: (creds) => dispatch(signIn(creds))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
