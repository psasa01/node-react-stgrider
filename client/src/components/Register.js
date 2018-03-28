import React, { Component } from 'react'

class Register extends Component {
    render() {
        return (

            <div>
                <h2>Please enter registration details</h2>
                <form action="/auth/register" method="POST">
                    <label htmlFor="name">Enter name</label>
                    <input className="validate" type="text" name="name" />
                    <label htmlFor="email">Enter Email</label>
                    <input className="validate" type="email" name="email" />
                    <label htmlFor="password">Enter Password</label>
                    <input className="validate" type="password" name="password" />
                    <label htmlFor="password-potvrda">Confirm Password</label>
                    <input className="validate" type="password" name="password-potvrda" />
                    <button type="submit">Submit</button>
                </form>
            </div>

        )
    }
}

export default Register;

