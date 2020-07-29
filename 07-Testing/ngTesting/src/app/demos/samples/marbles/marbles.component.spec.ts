import { TestBed, async } from '@angular/core/testing';
import { getTestScheduler, cold } from 'jasmine-marbles';

import { UserService } from './services/user.service';
import { By } from '@angular/platform-browser';
import { MarblesComponent } from './marbles.component';
import { MaterialModule } from 'src/app/material.module';

describe('AppComponent', () => {
  let userService: any;

  beforeEach(async(() => {
    userService = jasmine.createSpy('UserService');
    userService.getUsers = cold('a-b-c', { a: 'Mike', b: 'Flo', c: 'Rolf' });

    TestBed.configureTestingModule({
      declarations: [MarblesComponent],
      imports: [MaterialModule],
      providers: [{ provide: UserService, useValue: userService }]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MarblesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should correctly show all user names', async () => {
    const fixture = TestBed.createComponent(MarblesComponent);
    fixture.detectChanges(); // trigger change detection

    getTestScheduler().flush(); // flush the observable
    fixture.detectChanges(); // trigger change detection again

    const liElements = fixture.debugElement.queryAll(By.css('.user'));
    expect(liElements.length).toBe(3);

    expect(liElements[0].nativeElement.innerText).toBe('Mike');
    expect(liElements[1].nativeElement.innerText).toBe('Flo');
    expect(liElements[2].nativeElement.innerText).toBe('Rolf');
  });
});
