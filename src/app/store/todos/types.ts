import { TodosTypes } from 'src/app/models/Todos';

export type TodosStateType = {
  todos: TodosTypes[];
};

export type AddTodoType = {
  todo: TodosTypes;
};
