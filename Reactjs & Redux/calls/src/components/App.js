import React from "react";
import axios from "axios";

import { UsersCreator } from "./UsersCreator";
import { UsersTable } from "./UsersTable";

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                first_name: "",
                last_name: "",
                email: "",
                role: "",
                country: "",
                city: "",
                municipality: ""
            },
            users: []
        }

        this.handleUserOnChange = this.handleUserOnChange.bind(this);
        this.fetchUsers = this.fetchUsers.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount() {
        this.fetchUsers();
    }

    handleUserOnChange(e) {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        })
    };

    fetchUsers() {
       axios.get("http://localhost:8000/users")
            .then((res) => {
                console.log(res);
                this.setState({
                    users: res.data
                });
            })
            .catch((err) => {
                console.log("Error fetching users", err);
            });
    }

    deleteUser(userId) {
        axios.delete("http://localhost:8000/users/" + userId)
        .then((res) => {
                    this.fetchUsers();
            })
            .catch((err) => {
                console.log("Error deleting user", err);
            })
    }

    createUser(e) {
        e.preventDefault();
        axios({
            method: 'post',
            url: "http://localhost:8000/users/",
            data: this.state.user
        })
        .then((ress) => {
            this.fetchUsers();
        })
        .catch((err) => {
            console.log("Error deleteing user", err);
        })
    }

    render () {
        return(
            <div id="app-container">
                <UsersCreator 
                    user={this.state.user} 
                    handleUserOnChange={this.handleUserOnChange} 
                />
                <UsersTable
                 users={this.state.users}
                 deleteUser={this.deleteUser}
                 />
            </div>
        )
    }
}