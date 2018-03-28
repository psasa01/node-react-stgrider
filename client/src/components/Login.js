import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (

            <div>
                <form action="/auth/login" method="POST">
                    <input type="email" name="email" />
                    <input type="password" name="password" />
                    <button type="submit">Submit</button>
                </form>
            </div>


        )
    }
}

export default Login;

