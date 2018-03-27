import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <a href="/auth/google">Click here to login with google&nbsp;</a>
        <a href="/auth/facebook">Click here to login with facebook&nbsp;</a>
        <a href="/api/current_user">Current user&nbsp;</a>
        <a href="/api/logout">Logout</a>

        <br />

        <form action="/auth/register" type="POST" >

          <label><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="name" required />
          <label><b>Email</b></label>
          <input type="email" placeholder="Enter Email" name="email" required />
          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required />
          <label><b>Password</b></label>
          <input type="password" placeholder="Potvrdi Password" name="password-potvrda" required />

          <button type="submit" name="register">Register</button>

        </form>

        <br />

        <form action="/auth/login" type="POST" >
          <label><b>Email</b></label>
          <input type="email" placeholder="Enter Email" name="email" required />
          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required />

          <button type="submit">Login</button>
        </form>



      </div>
    );
  }
}

export default App;
