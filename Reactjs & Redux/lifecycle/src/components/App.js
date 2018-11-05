import React from 'react';
import { Welcome } from './Welcome';
import { Users } from './Users';

export class App extends React.Component {
   
   constructor(props) {
       super(props);

       this.state = {
           showWelcome: true,
           users: []
       }

            this.toggleHome = this.toggleHome.bind(this);
            this.fetchUsers = this.fetchUsers.bind(this);

        console.log("Costructor");
   }

   componentWillMount() {
        console.log("Component Will Mount");
   }

   componentDidMount() {
        console.log("Component Did Mount");
        this.fetchUsers();
   }

   componenetWillReceiveProps(nextProps) {
       console.log("Component Will recieve props", nextProps);
   }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should component Update", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
            console.log("Commponent Will Update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("component Did Update", prevProps, prevState);
    }


        toggleHome() {
            this.setState({
                showWelcome: !this.state.showWelcome
            })
        }

        fetchUsers() {
            fetch("http://jsonplaceholder.typicode.com/users")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({
                    users: data
                })
            })
            .catch((err) => {
                console.log('Error fetching data', err);
            })
        }

    render() {
        return(
            <div>
                  { this.state.showWelcome ?  <Welcome name="Ivana" /> : null }

                   <button onClick={this.toggleHome}>(Un)mount component</button>

                   <Users data={this.state.users} />
            </div>
        )
    }
}


