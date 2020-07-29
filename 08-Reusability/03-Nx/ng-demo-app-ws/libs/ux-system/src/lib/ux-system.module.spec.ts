import { async, TestBed } from '@angular/core/testing';
import { UxSystemModule } from './ux-system.module';

describe('UxSystemModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UxSystemModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UxSystemModule).toBeDefined();
  });
});
