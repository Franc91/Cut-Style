import React, { Component } from 'react'

export class SignUp extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="name"/>
                    <input type="surname"/>
                    <input type="email"/>
                    <input type="password"/>
                    <input type="password"/>
                    <button type="submit">Zarejestruj</button>
                </form>
            </div>
        )
    }
}

export default SignUp
