import React from "react";

export class UsersCreator extends React.Component {
    render () {
        return(
            <div className="users-creator">
                <form onSubmit={this.props.createUser}>
                    <p>
                        <input onChange={this.props.handleUserOnChange} value={this.props.user.first_name} name="first_name" type="text" placeholder="First Name"/>
                    </p>

                    <p>
                        <input onChange={this.props.handleUserOnChange} value={this.props.user.last_name} name="last_name" type="text" placeholder="Last Name"/>
                    </p>

                    <p>
                        <input onChange={this.props.handleUserOnChange} value={this.props.user.email} name="email" type="text" placeholder="E-mail"/>
                    </p>

                    <p>
                        <input onChange={this.props.handleUserOnChange} value={this.props.user.role} name="role" type="text" placeholder="Role"/>
                    </p>

                    <p>
                        <input onChange={this.props.handleUserOnChange} value={this.props.user.password} name="password" type="password" placeholder="Password"/>
                    </p>

                    <p>
                        <input type="submit" value="Add User"/>
                    </p>
                </form>          
            </div>
        )
    }
}