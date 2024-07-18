import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDataPopupComponent } from './login-data-popup.component';

describe('LoginDataPopupComponent', () => {
  let component: LoginDataPopupComponent;
  let fixture: ComponentFixture<LoginDataPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginDataPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginDataPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
