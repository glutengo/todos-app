import React, {Component} from 'react';
import './App.css';
import {TodoList} from './TodoList';
import {connect} from 'react-redux';
import {getTodos} from './actions';
import {AppBar} from 'material-ui';


class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getTodos());
    }

    render() {
        const todos = this.props.todos ? this.props.todos : [];
        return (
            <div>
                <AppBar title="Hello, Sprylab">
                </AppBar>
                <TodoList todos={todos}/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        todos: state
    }
}

export default connect(mapStateToProps)(App)
