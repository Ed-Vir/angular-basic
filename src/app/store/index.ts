import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { todoReducer } from 'src/app/store/todos';
import { environment } from 'src/environments/environment';
import { todosReducer } from 'src/app/store/todos/reducer';
import { TodosStateType } from 'src/app/store/todos/types';

export type RootStoreTypes = {
  [todoReducer]: TodosStateType;
};

export const reducers: ActionReducerMap<RootStoreTypes> = {
  [todoReducer]: todosReducer,
};

export const metaReducers: MetaReducer<RootStoreTypes>[] = !environment.production ? [] : [];
