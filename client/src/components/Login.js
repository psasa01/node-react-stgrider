import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (

            <div>
                <h2>Please enter username and password</h2>
                <form action="/auth/login" method="POST">
                    <input type="email" name="email" />
                    <input type="password" name="password" />
                    <button className="btn indigo waves-effect waves-light darken-4" type="submit">Submit</button>
                </form>
            </div>


        )
    }
}

export default Login;

