import { TodoState } from '../types';
import { TodoActions } from '../actions';
import { ActionTypes } from '../actionTypes';


const initialState: TodoState = {
    allIds: [],
    byIds: {}
}

const todos = (state = initialState, action: TodoActions) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO: {
            const { content, id } = action.payload;
            console.log(content, id);
            // const newState = Object.assign(state, {});
            // newState.allIds.push(id);
            // newState.byIds[id] = {
            //     content: content,
            //     completed: false,
            // }

            // return newState;
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false
                    },
                },
            };
        }

        case ActionTypes.TOGGLE_TODO: {
            const { id } = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed,
                    },
                },
            }
        }

        default:
            return state;
    }
}

export default todos;
