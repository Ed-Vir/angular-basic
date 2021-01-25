import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TodosStateType } from 'src/app/store/todos/types';
import { todoReducer } from 'src/app/store/todos/index';

export const selectCountFeature = createFeatureSelector<TodosStateType>(todoReducer);

export const selectAllTodos = createSelector(selectCountFeature, (store) => store.todos);
