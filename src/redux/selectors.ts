import { VISIBILITY_FILTERS } from '../constants';
import { State, VisibilityFilterTypes } from './types';

export type TodoItem = {
    content: string;
    completed: boolean;
    id: number;
}

export const getTodoList = (store: State): number[] => store && store.todos ? store.todos.allIds : [];

export const getTodoById = (store: State, id: number): TodoItem => {
    return { ...store.todos.byIds[id], id };
}

// todoのIDをもとにTodoItemを取得する
export const getTodos = (store: State): TodoItem[] => getTodoList(store).map(id => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store: State, visibilityFilter: VisibilityFilterTypes): TodoItem[] => {
    const allTodos = getTodos(store);
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allTodos
    }
}

