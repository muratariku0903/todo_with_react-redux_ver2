import { VISIBILITY_FILTERS } from "../constants";

// visibilityFilter
export type VisibilityFilterTypes = typeof VISIBILITY_FILTERS[keyof typeof VISIBILITY_FILTERS];

// todos
export type TodoState = {
    allIds: number[];
    byIds: { [key: string]: TodoItemState };
};
export type TodoItemState = {
    content: string;
    completed: boolean;
};

//state
export type State = {
    visibilityFilter: VisibilityFilterTypes;
    todos: TodoState;
}

// sample
// {
//     todos: {
//       allIds: [
//         1,
//         2
//       ],
//       byIds: {
//         '1': {
//           content: 'do something',
//           completed: false
//         },
//         '2': {
//           content: 'go somewhere',
//           completed: false
//         }
//       }
//     },
//     visibilityFilter: 'all'
// }
