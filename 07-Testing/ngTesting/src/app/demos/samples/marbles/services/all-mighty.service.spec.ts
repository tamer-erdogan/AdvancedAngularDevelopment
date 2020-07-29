import { hot, cold } from 'jasmine-marbles';
import { TestScheduler } from 'rxjs/testing';

import { AllMightyService } from './all-mighty.service';
import { fakeAsync } from '@angular/core/testing';

describe('Marbles - AllMightyService', () => {
  let service: AllMightyService;
  let userService: any;

  beforeEach(() => {
    userService = jasmine.createSpy('UserService');
    userService.getUsers = hot('^-a-b-c', {
      a: 'Hans',
      b: 'Martin',
      c: 'Julia'
    });
    service = new AllMightyService(userService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should correctly return mighty users (using jasmine-marbles)', () => {
    const expectedObservable = cold('--a-b-c', {
      a: 'Mighty Hans',
      b: 'Mighty Martin',
      c: 'Mighty Julia'
    });
    expect(service.getModifiedUsers).toBeObservable(expectedObservable);
  });

  it('should correctly return mighty users (without marble testing)', fakeAsync(done => {
    let count = 0;
    const expectedValues = ['Mighty Hans', 'Mighty Martin', 'Mighty Julia'];

    service.getModifiedUsers.subscribe(users => {
      expect(users).toEqual(expectedValues[count]);
      count++;
      done();
    });
  }));

  it('should correctly return mighty users (using RxJS 6 tools)', () => {
    const scheduler = new TestScheduler((actual, expected) => {
      // asserting the two objects are equal
      expect(actual).toEqual(expected);
    });

    scheduler.run(helpers => {
      const { expectObservable } = helpers;

      const coldObservable = scheduler.createHotObservable('^-a-b-c', {
        a: 'Hans',
        b: 'Martin',
        c: 'Julia'
      });
      userService.getUsers = coldObservable;
      service = new AllMightyService(userService);

      const expectedMarble = '--a-b-c';
      const expectedVales = {
        a: 'Mighty Hans',
        b: 'Mighty Martin',
        c: 'Mighty Julia'
      };
      expectObservable(service.getModifiedUsers).toBe(
        expectedMarble,
        expectedVales
      );
    });
  });
});
