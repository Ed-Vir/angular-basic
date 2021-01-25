import { createReducer, on } from '@ngrx/store';

import { initialState } from 'src/app/store/todos/index';
import { addTodo, removeTodo, updateTodo } from './actions';

export const todosReducer = createReducer(
  initialState,

  on(addTodo, (state, { todo }) => ({ ...state, todos: [...state.todos, todo] })),

  on(removeTodo, (state, { id }) => ({ ...state, todos: state.todos.filter((todo) => todo.id !== id) })),

  on(updateTodo, (state, { id, updates }) => ({
    ...state,
    todos: state.todos.map((todo) => (todo.id === id ? { ...todo, ...updates } : todo)),
  }))
);
