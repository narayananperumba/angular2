/* tslint:disable:no-unused-variable */
import { WelcomeComponent } from './welcome.component';

import { TestBed } from '@angular/core/testing';

import { By }             from '@angular/platform-browser';

////////  SPECS  /////////////

/// Delete this
describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('WelcomeComponent with TCB', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [WelcomeComponent]});
  });

  it('should instantiate component', () => {
    let fixture = TestBed.createComponent(WelcomeComponent);
    expect(fixture.componentInstance instanceof WelcomeComponent).toBe(true, 'should create AppComponent');
  });

  it('should have expected <h4> text', () => {
    let fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();

    let h4 = fixture.debugElement.query(By.css('h4')).nativeElement;

    expect(h4.innerText).toMatch(/welcome!/i, '<h4> should say something about "welcome!"');
  });
});
