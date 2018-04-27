import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            userPass: "",
            userEmail: "",
        };
    }

    verifyInput = () => {
        // Check if all fields have data in them
        if(this.state.userName === "" ||
            this.state.userPass === ""){
            alert("Please complete all fields");
        }

        // Send request to database to see if valid fields
    }

    render() {
        return (
            // Div to hold entire Login Page
            <div className="LoginBody">
                <h1>Login Page</h1>

                <div>
                    {/* Registration Form */}
                    <form>
                        {/* Field for Username */}
                        <label className="half-col">
                            Username:
                            <input value={this.state.userName} onChange={this.updateName}/>
                        </label>
                        {/* Field of password*/}
                        <label className="half-col">
                            Password:
                            <input value={this.state.userPass} onChange={this.updateName}/>
                        </label>
                    </form>
                    <button type="button" className="registerButton" onClick={() => this.verifyInput()}>Submit</button>

                </div>
            </div>
        );
    }
}

export default Login;
