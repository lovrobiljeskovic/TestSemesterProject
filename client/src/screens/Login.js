import React from "react"
import LoginForm from "../components/LoginForm"
import SignupForm from "../components/SignupForm"
import api from '../api'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            onLogin: true,
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            birthday: "",
            didSubmit: false
        }
    }

    handleFormChange = (field, newValue) => {
        this.setState({
            [field]: newValue
        })
    }

    onChangeComponentButtonClicked = () => {
        this.setState({
            onLogin: !this.state.onLogin,
            didSubmit: false
        })
    }

    onSubmitButtonClicked = (context) => {
        const { onLogin, username, password, firstname, lastname, birthday } = this.state

        const loginParams = { username, password }
        const signupParams = { username, password, firstname, lastname, birthday }

        api.get(onLogin ? "/login" : "/signup", {
            params: onLogin ? loginParams : signupParams
        })
            .then(response => {
                this.setState({ successfullySubmitted: response.data, didSubmit: true })
            })
    }

    render() {
        const { onLogin, successfullySubmitted, didSubmit } = this.state

        return (
            <div style={{ width: "100%", height: "100vh", position: "relative" }}>
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    {onLogin
                        ? <LoginForm handleFormChange={this.handleFormChange} />
                        : <SignupForm handleFormChange={this.handleFormChange} />
                    }
                    <SubmitButtons
                        onLogin={onLogin}
                        onChangeComponentButtonClicked={this.onChangeComponentButtonClicked}
                        onSubmitButtonClicked={this.onSubmitButtonClicked}
                    />
                    {didSubmit && 
                        <MessageBox onLogin={onLogin} successfullySubmitted={successfullySubmitted} />
                    }
                </div>
            </div>
        )
    }
}

const MessageBox = (props) => {
    const { onLogin, successfullySubmitted } = props

    return (
        <div id="messageBox" style={{ marginTop: "8px", display: "flex", width: "100%", height: "48px", boxShadow: "inset -1px -1px 3px 0px rgba(0,0,0,0.3)", background: successfullySubmitted ? "lightgreen" : "crimson", justifyContent: "center", alignItems: "center" }}>
            <h4 id="messageBoxText" style={{ color: successfullySubmitted ? "honeydew" : "black" }}>
            {onLogin
                ? (successfullySubmitted ? "Successfully logged in" : "Failed to log in")
                : (successfullySubmitted ? "Successfully signed up" : "Failed to sign up")
            }
            </h4>
        </div>
    )
}

const SubmitButtons = (props) => {
    const { onChangeComponentButtonClicked, onSubmitButtonClicked, onLogin } = props

    return (
        <table style={{ width: "100%" }}>
            <tbody style={{ display: "flex", justifyContent: "space-between" }}>
                <tr>
                    <td style={{ padding: "0px" }}>
                        <button
                            id="changeComponentButton"
                            style={{ width: "80px", height: "36px" }}
                            onClick={onChangeComponentButtonClicked}>{onLogin ? "Signup" : "Login"}</button>
                    </td>
                </tr>
                <tr>
                    <td style={{ padding: "0px" }}>
                        <button
                            id="submitButton"
                            style={{ width: "80px", height: "36px" }}
                            onClick={onSubmitButtonClicked}>Submit</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Login