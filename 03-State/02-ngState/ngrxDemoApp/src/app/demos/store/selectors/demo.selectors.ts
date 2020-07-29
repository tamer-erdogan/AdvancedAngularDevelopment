import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  DemoState,
  demosFeatureKey,
  demosAdapter
} from '../reducers/demos.reducer';

export const getDemoState = createFeatureSelector<DemoState>(demosFeatureKey);

// Note: Selector refactor to use Entity Adapter
export const getDemoEntities = createSelector(
  getDemoState,
  demosAdapter.getSelectors().selectAll
);

// Note: Make this structure iterable again for the template
export const getAllDemos = createSelector(getDemoEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

// Note: Default Selectors provided by Entity
export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = demosAdapter.getSelectors();
