import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    renderContent() {
        console.log(this.props.auth)
        switch (this.props.auth) {
            case null:
                return (
                    <ul>
                        <li>Loading... &nbsp;&nbsp;</li>
                    </ul>
                )
            case false:
                return (
                    <ul>
                        <li>
                            <a href="/login">Login</a>
                        </li>
                        <li>
                            <a href="/register">Register</a>
                        </li>
                        <li>
                            <a href="/auth/google">Google</a>
                        </li>
                        <li>
                            <a href="/auth/facebook">Facebook</a>
                        </li>
                        <li>&nbsp;&nbsp;&nbsp;</li>
                    </ul>
                )
            default:
                return (
                    <ul>
                        <li>
                            <a href="/api/logout">Logout</a>
                        </li>
                        <li>
                            {this.props.auth.ime}
                        </li>
                        <li>&nbsp;&nbsp;
                            <img className="circle" style={{ margin: "0.6em" }} src={this.props.auth.slika || this.props.auth.gravatar} alt="" />&nbsp;&nbsp;
                        </li>
                    </ul>
                )
        }
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper indigo darken-4">
                    <a href="/" className="left brand-logo">&nbsp;&nbsp;Emaily</a>
                    <ul className="right">
                        <li>
                            {this.renderContent()}
                        </li>


                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth };
}

export default connect(mapStateToProps)(Header);
