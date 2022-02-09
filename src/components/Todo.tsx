import React from 'react';
import { connect } from 'react-redux';
import { State } from '../redux/types';
import { getTodos, TodoItem } from '../redux/selectors';
import { toggleTodo, TodoActions } from '../redux/actions';
import { Dispatch } from 'redux';

type TodoProps = {
    todo: TodoItem;
    toggleTodo: (id: number) => TodoActions;
}

const Todo: React.FC<TodoProps> = (props) => {
    const { content, completed, id } = props.todo;

    const onClick = () => {
        props.toggleTodo(id);
    }

    return (
        <li onClick={onClick}>{content} {completed ? 'finish' : 'not finish'}</li>
    );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        toggleTodo: (id: number) => dispatch(toggleTodo(id))
    };
}

export default connect(null, mapDispatchToProps)(Todo);
