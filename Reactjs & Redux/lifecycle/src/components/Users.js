import React from 'react';

export class Users extends React.Component {
    render() {
        return ( 
            <div className="users-list">
            {
                this.props.data.filter(user => { return user.address.street === "Victor Plains" }).map((user) => {
                    return(
                        <div key={user.id} className="singe-user">
                        <h2>{user.name}</h2>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}