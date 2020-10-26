import React,
{ Component } from "react";
import NavBar from "./../../navbar";
import books from "./../../../assets/book.png";
class Login extends Component
{

    constructor()
    {

        super();
        this.state = {

            input: {},
            errors: {},
            value: ""

        };

        this.handleChange = this.handleChange.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );

    }
    handleChange( event )
    {

        let input = this.state.input;
        input[ event.target.name ] = event.target.value;
        this.setState( { input } );

    }
    handleSubmit( event )
    {

        event.preventDefault();
        alert( "Form is submited" );

    }

    render()
    {

        return (
            <div className="register-container">
                <NavBar/>
                <div class="head">
                    <div class="row">
                        <div class="col col-md-8">
                            <h2>Login Here</h2>
                        </div>
                        <div class="col col-md-4">
                            <div className="alreadyLogin">
                                Not registered yet&nbsp;
                                <button type="button" className="btn btn-primary"
                                    onClick={
                                        () => {

                                            window.location.href = "/register";

                                        }
                                }>
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col col-lg-7 col-md-7 col-sm-7 col-xs-7 scrollable-col">
                        <form action=""
                            onSubmit={
                                this.handleSubmit
                            }
                            id="Login">
                            <div className="form-group">
                                <label for="uid">User Id:</label>
                                <input type="text" className="form-control" id="uid" placeholder="Userid" name="uid" required/>
                            </div>
                            <div className="form-group">
                                <label for="pwd">Password:</label>
                                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required/>
                            </div>
                            <button type="submit" className="example_a"
                                onClick={
                                    () => {

                                        this.setState( { isVerified: true } );

                                    }
                            }>
                                Login
                            </button>
                            <br></br>
                            <a href="#" data-target="#pwdModal" data-toggle="modal">Forgot my password</a>
                            <div id="pwdModal" class="modal fade"  role="dialog" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                            <h2 class="text-center">Don't Remember Your Password?</h2>
                                        </div>
                                        <div class="modal-body">
                                            <div class="col-md-12">
                                                <div class="panel panel-default">
                                                    <div class="panel-body">
                                                        <div class="text-center">

                                                            <p>Type here your registered email Id to reset your password</p>
                                                            <div class="panel-body">
                                                                <fieldset>
                                                                    <div class="form-group">
                                                                        <input class="form-control input-lg" placeholder="E-mail Address" name="email" type="email"/>
                                                                    </div>
                                                                    <input class="btn btn-lg example_a btn-block" value="Send Password Reset Link" type="submit"/>
                                                                </fieldset>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <div class="col-md-12">
                                                <button class="btn" data-dismiss="modal" aria-hidden="true">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer className="footer"></footer>
                        </form>

                    </div>

                    <div class="col col-lg-5 col-md-5 col-sm-5 col-xs-5 fixed fixed-col">
                        <img src={books}
                            height="400vh"
                            width="auto"/>
                    </div>
                </div>
            </div>
        );

    }

}

export default Login
