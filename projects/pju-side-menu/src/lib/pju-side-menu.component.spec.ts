import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PjuSideMenuComponent } from './pju-side-menu.component';
import { provideRouter } from '@angular/router';

describe('PjuSideMenuComponent', () => {
  let component: PjuSideMenuComponent;
  let fixture: ComponentFixture<PjuSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PjuSideMenuComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PjuSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSignIn when login button is clicked', () => {
    spyOn(component.onSignIn, 'emit')
    fixture.componentRef.setInput('isAuthenticated', false)

    fixture.detectChanges()

    const button = fixture.nativeElement.querySelector('[data-login]') as HTMLButtonElement

    expect(button).toBeTruthy()

    button.click()

    expect(component.onSignIn.emit).toHaveBeenCalled()
  })

  it('should call onSignOut when logout button is clicked', () => {
    spyOn(component.onSignOut, 'emit')
    fixture.componentRef.setInput('isAuthenticated', true)

    fixture.detectChanges()

    const button = fixture.nativeElement.querySelector('[data-logout]') as HTMLButtonElement

    expect(button).toBeTruthy()

    button.click()

    expect(component.onSignOut.emit).toHaveBeenCalled()
  })
});
