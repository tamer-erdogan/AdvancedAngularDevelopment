import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AsyncComponent } from './async.component';
import { SimpleAuthService } from './simple-auth.service';

describe('Component: Login - fakeAsync', () => {
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

  it('component has been created', fakeAsync(() => {
    expect(component.needsLogin).toBeTruthy();
  }));

  it('returns false when the user is not authenticated', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    component.ngOnInit();
    tick(400);
    fixture.detectChanges();
    expect(
      fixture.debugElement
        .query(By.css('span'))
        .nativeElement.textContent.trim()
    ).toBe('NotAuthenticated');
  }));

  it('returns true when the user is authenticated', fakeAsync(() => {
    fixture.detectChanges();
    spyOn(service, 'isAuthenticated').and.returnValue(of(true));
    tick(400);
    component.ngOnInit();
    tick();
    fixture.detectChanges();

    expect(
      fixture.debugElement
        .query(By.css('span'))
        .nativeElement.textContent.trim()
    ).toBe('Authenticated');
  }));

  afterEach(() => {
    localStorage.removeItem('token');
    fixture = null;
    component = null;
    service = null;
  });
});
