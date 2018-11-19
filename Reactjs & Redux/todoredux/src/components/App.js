import React from 'react';
import {connect } from 'react-redux';

import { TodoField } from './TodoField';
import { TodoList } from './TodoList';

import { addTodo } from "../actions/TodoAction";


export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todoValue: ""
        }

        this.handleonChange = this.handleonChange.bind(this);
    }

    handleonChange(e) {
        this.setState({
            todoValue: e.target.value
        })
    }


    render() {
            return (
                   <div id="app">
                       <div className="centered-content">
                            <TodoField
                            handleonChange={this.handleonChange}
                            todoValue={this.state.todoValue}
                            addTodo={(event) => this.props.addTodo(this.state.todoValue, event)}
                            />
                            <TodoList todos={this.props.todos} />
                        </div>
                    </div>
            )
        }
}



const mapStateToProps = (state) => {
    return {
        todos: state.TodoReducer.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo,e) => {
            e.preventDefault();
            dispatch(addTodo(todo));
        }
    }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);