import { ActionReducerMap } from '@ngrx/store';
import { tasksReducer } from './tasks/state/tasks.reducer';
import { tagsReducer } from './tags/state/tags.reducer';
import { usersReducer } from './users/state/users.reducer';

export interface AppState {
  tasks: any; // Типы данных можно уточнить
  tags: any;
  users: any;
}

export const reducers: ActionReducerMap<AppState> = {
  tasks: tasksReducer,
  tags: tagsReducer,
  users: usersReducer,
};
