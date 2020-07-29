import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AsyncComponent } from './async.component';
import { SimpleAuthService } from './simple-auth.service';

describe('Component: Login - whenStable', () => {
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

  it('component has been created', async(() => {
    expect(component).toBeTruthy();
  }));

  it('returns false when the user is not authenticated', async(() => {
    fixture.detectChanges();
    expect(component.needsLogin).toBeTruthy();
    expect(
      fixture.debugElement
        .query(By.css('span'))
        .nativeElement.textContent.trim()
    ).toBe('NotAuthenticated');
  }));

  it('returns true when the user is authenticated', async(() => {
    fixture.detectChanges();
    spyOn(service, 'isAuthenticated').and.returnValue(of(true));

    fixture.whenStable().then(() => {
      component.ngOnInit();
      fixture.detectChanges();

      expect(
        fixture.debugElement
          .query(By.css('span'))
          .nativeElement.textContent.trim()
      ).toBe('Authenticated');
    });
  }));

  afterEach(() => {
    localStorage.removeItem('token');
    fixture = null;
    component = null;
    service = null;
  });
});
