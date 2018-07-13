import React from 'react';
import connect from 'react-redux/es/connect/connect';
import {updateTodo} from './actions';
import {ListItem, Checkbox} from 'material-ui';

class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    onClick = () => {
        this.props.dispatch(updateTodo({...this.props.todo, completed: !this.props.todo.completed}));
    }

    render() {
            return (<ListItem onClick={this.onClick}>
            {this.props.todo.title}
            <Checkbox checked={this.props.todo.completed}/>
        </ListItem>);
    }
}

export default connect()(Todo);