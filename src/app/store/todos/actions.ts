import { createAction, props } from '@ngrx/store';

import { TodosTypes } from 'src/app/models/Todos';

export const ADD_TODO = '[TODO] add';
export const REMOVE_TODO = '[TODO] remove';
export const UPDATE_TODO = '[TODO] update';

export const addTodo = createAction(ADD_TODO, props<{ todo: TodosTypes }>());
export const removeTodo = createAction(REMOVE_TODO, props<{ id: string }>());
export const updateTodo = createAction(UPDATE_TODO, props<{ id: string; updates: TodosTypes }>());
