import { cold } from 'jasmine-marbles';
import { map, tap } from 'rxjs/operators';

it('should multiply by "2" each value emitted', () => {
  const values = { a: 1, b: 2, c: 3 };
  const expectedVals = { a: 2, b: 4, c: 6 };
  const source = cold('-a-b-c-|', values);
  const expected = cold('-a-b-c-|', expectedVals);

  const result = source.pipe(
    map(x => x * 2),
    tap(console.log)
  );

  expect(result).toBeObservable(expected);
});
