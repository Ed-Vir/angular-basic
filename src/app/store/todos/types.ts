import { TodosTypes } from 'src/app/models/Todos';

export type TodosStateType = {
  todos: TodosTypes[]; // it's deprecated. Better use Array<TodosTypes>
};

export type AddTodoType = {
  todo: TodosTypes;
};
