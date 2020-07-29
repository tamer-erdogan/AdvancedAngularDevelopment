import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AuthState } from './store/reducers/auth.reducer';
import { FBAuthGuard } from './fbauth-guard.service';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

describe('Auth Guard', () => {
  let guard: FBAuthGuard;
  let store: MockStore<AuthState>;

  const initialState = {
    user: null,
    token: null,
    isLoggedIn: false
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FBAuthGuard, provideMockStore({ initialState })]
    });

    store = TestBed.get(Store);
    guard = TestBed.get(FBAuthGuard);
  });

  it('should return false if the user state is not logged in', () => {
    const expected = cold('(a|)', { a: false });

    expect(guard.canLoad()).toBeObservable(expected);
  });

  it('should return true if the user state is logged in', () => {
    store.setState({
      user: {},
      token: null,
      isLoggedIn: false
    });
    const expected = cold('(a|)', { a: true });
    expect(guard.canLoad()).toBeObservable(expected);
  });
});
