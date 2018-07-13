export const GET_TODOS = 'GET_TODOS';
export const UPDATE_TODO = 'UPDATE_TODO';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';

export const getTodos = () => dispatch => fetch('http://localhost:3001/todos')
    .then(response => response.json())
    .then(todos => dispatch(receiveTodos(todos)));

export const receiveTodos = todos => ({
    type: RECEIVE_TODOS,
    payload: todos
});

export const updateTodo = todo => dispatch => fetch('http://localhost:3001/todos/' + todo.id,
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(todo)
    })
    .then(response => dispatch(getTodos()));