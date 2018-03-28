import React, { Component } from 'react'

class Login extends Component {
    render() {
        return(

            <div className="z-depth-3 brown lighten-5 col s12 login-forma">
                <form action="/login" method="POST">
                    <h4 className="login-h4 brown-text center-align col s10 offset-s1">Molimo unesite podatke za prijavu
                  <hr />
                        <div className="input-field col s10 offset-s1">
                            <input id="email" type="email" name="email" className="validate" />
                            <label for="email">Email</label>
                        </div>
                        <div className="input-field col s10 offset-s1">
                            <input id="password" type="password" name="password" className="validate" />
                            <label for="password">Šifra</label>
                        </div>
                        <div className="col s10 offset-s1"><br />
                            <div className="row"><a id="btn-reg" href="/auth/facebook" className="btn btn-large waves-effect waves-light col s12 m5 l4 blue darken-4 right">
                                Facebook prijava</a>
                                <button id="btn-reg" type="submit" name="login" className="btn btn-large waves-effect waves-light col m5 s12 l4 brown right">Prijava</button>
                            </div>
                        </div>
                        <div className="col s10 offset-s1">
                            <label style={{ float: 'right' }}><br /><a href="/reset" className="pink-text"><b>Zaboravili ste šifru?</b></a></label>
                        </div>
                    </h4>
                </form>
            </div>
        )
    }
}

export default Login;

