import { createReducer, on } from '@ngrx/store';
import * as TagActions from './tags.actions';
import { TagState, initialTagState } from './tags.state';

export const tagsReducer = createReducer(
  initialTagState,
  on(TagActions.loadTags, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(TagActions.loadTagsSuccess, (state, { tags }) => ({
    ...state,
    tags,
    loading: false
  })),
  on(TagActions.loadTagsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(TagActions.addTag, (state) => ({
    ...state,
    loading: true
  })),
  on(TagActions.addTagSuccess, (state) => ({
    ...state,
    loading: false
  })),
  on(TagActions.addTagFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
