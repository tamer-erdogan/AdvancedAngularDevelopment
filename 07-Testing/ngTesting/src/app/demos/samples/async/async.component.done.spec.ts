import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AsyncComponent } from './async.component';
import { SimpleAuthService } from './simple-auth.service';

describe('Component: Login - done', () => {
  let component: AsyncComponent;
  let fixture: ComponentFixture<AsyncComponent>;
  let service: SimpleAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [SimpleAuthService]
    });

    fixture = TestBed.createComponent(AsyncComponent);
    component = fixture.componentInstance;
    service = TestBed.get(SimpleAuthService);
  });

  it('component has been created', () => {
    expect(component.needsLogin).toBeTruthy();
  });

  it('returns false when the user is not authenticated', done => {
    fixture.detectChanges();
    expect(component.needsLogin).toBeTruthy();
    expect(
      fixture.debugElement
        .query(By.css('span'))
        .nativeElement.textContent.trim()
    ).toBe('NotAuthenticated');
    done();
  });

  it('returns true when the user is authenticated', done => {
    fixture.detectChanges();
    let spy = spyOn(service, 'isAuthenticated').and.returnValue(of(true));
    component.ngOnInit();

    spy.calls.mostRecent().returnValue.subscribe(() => {
      //apply changes from spy mock
      fixture.detectChanges();
      expect(
        fixture.debugElement
          .query(By.css('span'))
          .nativeElement.textContent.trim()
      ).toBe('Authenticated');
      done();
    });
  });

  afterEach(() => {
    localStorage.removeItem('token');
    fixture = null;
    component = null;
    service = null;
  });
});
