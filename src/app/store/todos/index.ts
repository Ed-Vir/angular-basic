import { TodosStateType } from 'src/app/store/todos/types';

export const todoReducer = 'todos';

export const initialState: TodosStateType = {
  todos: [{ id: '54445', title: 'todo title', complete: false }],
};
