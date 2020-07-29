import { AddDemo } from '../actions/demos.actions';
import { DemosReducer, initialState } from './demos.reducer';

describe('Demos Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = DemosReducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });

  describe('[Demos] Add Demo', () => {
    it('should return a new state with the added item', () => {
      let item = {
        url: 'unittesting',
        title: 'Into Unit Testing',
        component: 'UnitTestingComponent',
        id: 1,
        topicid: 1,
        visible: true,
        sortOrder: 0
      };

      let designated = {
        '1': {
          url: 'unittesting',
          title: 'Into Unit Testing',
          component: 'UnitTestingComponent',
          id: 1,
          topicid: 1,
          visible: true,
          sortOrder: 0
        }
      };

      const action = new AddDemo(item);
      const result = DemosReducer(initialState, action);
      expect(result.entities).toEqual(designated);
    });
  });
});
