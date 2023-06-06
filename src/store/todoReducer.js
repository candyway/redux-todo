import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: 0, body: 'купить хлеб' },
        { id: 1, body: 'купить дом' },
        { id: 2, body: 'купить морковку' },
    ],
};

export const addpost = createAction('ADD_POST');
export const deletepost = createAction('DELETE_POST');

const reducer = createReducer(initialState, (builder) => {
    builder.addCase(addpost, (state, action) => {
        const newPost = {
            id: Date.now(),
            body: action.payload,
        };
        state.todos = state.todos.concat(newPost);
    });

    builder.addCase(deletepost, (state, action) => {
        state.todos = state.todos.filter((post) => post.id !== action.payload);
    });
});

export default reducer;
