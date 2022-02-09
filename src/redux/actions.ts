import { ActionTypes } from "./actionTypes";
import { VisibilityFilterTypes } from "./types";

// これらはアクションクリエイターとその型定義

let nextTodoId = 0;

type AddTodoAction = {
    type: ActionTypes.ADD_TODO;
    payload: {
        id: number;
        content: string;
    }
};

export const addTodo = (content: string): AddTodoAction => ({ // return省略
    type: ActionTypes.ADD_TODO,
    payload: {
        id: ++nextTodoId, // addTodoが呼ばれると自動的にインクリメントされる仕組み
        content
    }
});

type ToggleTodoAction = {
    type: ActionTypes.TOGGLE_TODO;
    payload: {
        id: number
    }
};

export const toggleTodo = (id: number): ToggleTodoAction => ({
    type: ActionTypes.TOGGLE_TODO,
    payload: { id }
});

type SetFilterAction = {
    type: ActionTypes.SET_FILTER;
    payload: {
        filter: VisibilityFilterTypes;
    }
};

export const setFilterAction = (filter: VisibilityFilterTypes): SetFilterAction => ({
    type: ActionTypes.SET_FILTER,
    payload: { filter }
});


export type TodoActions = AddTodoAction | ToggleTodoAction | SetFilterAction;
