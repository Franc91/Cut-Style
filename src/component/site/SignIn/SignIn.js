import React, { Component } from 'react'

export class SignIn extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type='email' name='email' placeholder='wpisz swój email'/>
                    <input type='password' name='password' placeholder = 'wpisz swoje hasło'/>
                    <button type='submit'> Zaloguj </button>
                </form>
            </div>
        )
    }
}

export default SignIn
