import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return (
                    <ul>
                        <li>
                            <div className="preloader-wrapper small active" style={{ margin: "0.8em" }}>
                                <div className="spinner-layer spinner-blue-only">
                                    <div className="circle-clipper left">
                                        <div className="circle"></div>
                                    </div><div className="gap-patch">
                                        <div className="circle"></div>
                                    </div><div className="circle-clipper right">
                                        <div className="circle"></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                )
            case false:
                return (
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
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
                    <Link to="/" className="left brand-logo">&nbsp;&nbsp;Emaily</Link>
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
