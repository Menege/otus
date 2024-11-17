import { createAction, props } from '@ngrx/store';

export const loadTags = createAction('[Tags] Load Tags');
export const loadTagsSuccess = createAction(
  '[Tags] Load Tags Success',
  props<{ tags: any[] }>()
);
export const loadTagsFailure = createAction(
  '[Tags] Load Tags Failure',
  props<{ error: string }>()
);

export const addTag = createAction(
  '[Tags] Add Tag',
  props<{ tag: any }>()
);
export const addTagSuccess = createAction('[Tags] Add Tag Success');
export const addTagFailure = createAction(
  '[Tags] Add Tag Failure',
  props<{ error: string }>()
);
