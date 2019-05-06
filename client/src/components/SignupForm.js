import React from "react"

const SignupForm = (props) => {
    const { handleFormChange } = props

    const handleChange = (event) => {
        const id = event.target.id
        const newValue = event.target.value

        switch (id) {
            case "username":
                handleFormChange(id, newValue)
                break
            case "password":
                handleFormChange(id, newValue)
                break
            case "firstname":
                handleFormChange(id, newValue)
                break
            case "lastname":
                handleFormChange(id, newValue)
                break
            case "birthday":
                handleFormChange(id, newValue)
                break
            default:
                break
        }
    }

    return (
        <React.Fragment>
            <table>
                <tbody>
                    <tr>
                        <td style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}> 
                            <label>Username: </label>
                            <input type="text" id="username" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <label>Password: </label>
                            <input type="password" id="password" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <label>First name: </label>
                            <input type="text" id="firstname" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <label>Last name: </label>
                            <input type="text" id="lastname" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <label>Birth date: </label>
                            <input type="date" id="birthday" onChange={handleChange} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default SignupForm