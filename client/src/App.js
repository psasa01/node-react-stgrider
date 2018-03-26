import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="/auth/google">Click here to login with google</a>
        <a href="/auth/facebook">Click here to login with facebook</a>
        <a href="/api/current_user">Current user</a>
        <a href="/api/logout">Logout</a>

        <br/>

        <form action="/auth/register" type="POST" >

          <label for="name"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="name" required />
          <label for="email"><b>Email</b></label>
          <input type="email" placeholder="Enter Email" name="email" required />
          <label for="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required />
          <label for="password-potvrda"><b>Password</b></label>
          <input type="password" placeholder="Potvrdi Password" name="password-potvrda" required />

          <button type="submit">Register</button>

        </form>

        <br/>

        <form action="/auth/login" type="POST" >
        <label for="email"><b>Email</b></label>
        <input type="email" placeholder="Enter Email" name="email" required />
        <label for="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" required />

        <button type="submit">Login</button>
        </form>

      

      </div>
    );
  }
}

export default App;
