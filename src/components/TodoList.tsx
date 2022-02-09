import React from 'react';
import { connect } from 'react-redux';
import { State } from '../redux/types';
import { getTodos, TodoItem, getTodosByVisibilityFilter } from '../redux/selectors';
import Todo from './Todo';

type TodoListProps = {
    todos: TodoItem[]
}

const TodoList: React.FC<TodoListProps> = (props) => {
    const todos = props.todos;
    console.log(todos);
    return (
        <ul>
            {todos && todos.length
                ?
                todos.map((el, idx) => {
                    return <Todo key={idx} todo={el} />
                })
                :
                'no todos.'}
        </ul>
    );
}

const mapStateToProps = (state: State): TodoListProps => {
    return { todos: getTodosByVisibilityFilter(state, state.visibilityFilter) }
}

export default connect(mapStateToProps)(TodoList);
