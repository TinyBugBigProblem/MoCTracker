import React, { Component } from 'react';

// Uses material-ui to provide mateirla design components
class RegisterPage extends Component {
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
           this.state.userPass === "" ||
           this.state.userEmail=== ""){
            alert("Please complete all fields");
        }

        // Send request to database to see if valid fields
    }

    updateName= (e) => {
        this.setState({
            userName: e.target.value.trim()
        });
    }

    updatePass= (e) => {
        this.setState({
            userPass: e.target.value.trim()
        });
    }

    updateEmail = (e) => {
        this.setState({
            userEmail: e.target.value.trim()
        });
    }

    render() {
        return (
            // Div to hold entire Register Page
            <div className="RegisterBody">
                <h1>Register Page</h1>

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
                        {/* Field for email */}
                        <label className="half-col">
                            Email:
                            <input value={this.state.userEmail} onChange={this.updateName}/>
                        </label>
                    </form>
                    <button type="button" className="registerButton" onClick={() => this.verifyInput()}>Submit</button>

                </div>
            </div>
        );
    }
}

export default RegisterPage;
