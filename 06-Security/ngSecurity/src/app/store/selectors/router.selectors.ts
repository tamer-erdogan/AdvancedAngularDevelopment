import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from '../reducers/router.reducer';

export const getRouterState = createFeatureSelector<
  RouterReducerState<RouterStateUrl>
>('routerReducer');

export const getRouterInfo = createSelector(
  getRouterState,
  state => state.state
);
