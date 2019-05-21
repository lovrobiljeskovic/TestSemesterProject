import React from "react"
import VoteList from "../components/VoteList"
import api from '../api'

class Vote extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            onLogin: true,
            courses: [],
            error: false,
        }
    
    }

    componentDidMount() {
        
        api.get("/vote")
            .then(response => {
                this.setState({ courses: response.data })
            })
            .catch(err =>{
                console.log('response', err);                
            })
    }

    handleVote(course) {
        console.log('handleVote', course);
        this.setState({error:false})
        api.post("/vote", { course })
            .then(response => {
                console.log('voted', response)
            })
            .catch(err => {
                this.setState({ error: "Cannot vote: either already voted or you do not have qualifications"});
            })
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

    onSubmitButtonClicked = () => {
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
        const { error } = this.state;
        return (            
            <div>
                {error !== false && 
                <div class="alert alert-warning">
                    {error}
                </div>
                }
            <div class="card">
                <h3 class="card-header">Votes</h3>
                <div class="card-body">
                    <VoteList courses={this.state.courses} onClick={e => this.handleVote(e)}></VoteList>
                </div>
            </div>
            </div>
        )
    }
}


export default Vote