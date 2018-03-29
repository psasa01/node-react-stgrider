import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (

            <div>
                <h3>Please enter username and password</h3>
                <form action="/auth/login" method="POST">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" />
                    <button className="btn indigo waves-effect waves-light darken-4" type="submit">Submit</button>
                </form>
            </div>


        )
    }
}

export default Login;

