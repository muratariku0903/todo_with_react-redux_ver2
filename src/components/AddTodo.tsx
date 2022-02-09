import React from 'react';
import { useState } from 'react';
import { addTodo } from '../redux/actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TodoActions } from '../redux/actions'

type AddTodoProps = {
    addTodo: (input: string) => TodoActions;
}

const AddTodo: React.FC<AddTodoProps> = (props) => {
    const [input, setInput] = useState<string>('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    const onClickAdd = () => {
        props.addTodo(input);
        setInput('');
    }

    return (
        <div>
            <input type="text" onChange={onChange} />
            <button onClick={onClickAdd}>追加</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addTodo: (input: string) => dispatch(addTodo(input))
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);
