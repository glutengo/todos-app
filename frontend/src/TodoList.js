import React from 'react';
import Todo from './Todo';
import {List} from 'material-ui';

export class TodoList extends React.Component {

    render() {
        return (
            <List>
                {this.props.todos.map(todo => (
                    <Todo key={todo.id} todo={todo}/>
                ))}
            </List>
        )

    }
}