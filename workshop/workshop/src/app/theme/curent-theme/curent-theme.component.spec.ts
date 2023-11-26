import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurentThemeComponent } from './curent-theme.component';

describe('CurentThemeComponent', () => {
  let component: CurentThemeComponent;
  let fixture: ComponentFixture<CurentThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurentThemeComponent]
    });
    fixture = TestBed.createComponent(CurentThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
