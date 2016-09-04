/* tslint:disable:no-unused-variable */

import { ReactiveFormsModule,FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import {Game} from './game'
import {AddService} from './add.service';
import { SpyObject } from './helper';


import { By }             from '@angular/platform-browser';
import Spy = jasmine.Spy;

interface IElements {
  element: HTMLElement;
  form: HTMLFormElement;
  titleInput: HTMLInputElement;
  urlInput: HTMLInputElement;
  noteInput: HTMLTextAreaElement;
  saveButton: HTMLInputElement;
}

export class MockAddService extends SpyObject{
  games:Game[] = [];
  addGame: Spy;
  constructor()
  {
    super(AddService);
    this.addGame = this.spy('addGame').andReturn(this);
  }
}
////////  SPECS  /////////////

/// Delete this
describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('AddComponent with TCB', function () {
  let mockAddService: MockAddService;
  beforeEach(() => {
    mockAddService = new MockAddService();
    TestBed.configureTestingModule({imports:[ReactiveFormsModule],declarations: [AddComponent], providers:[{provide:AddService,useValue: mockAddService}]});
  });

  it('should instantiate component', () => {
    let fixture = TestBed.createComponent(AddComponent);
    expect(fixture.componentInstance instanceof AddComponent).toBe(true, 'should create AppComponent');
  });

  it('Input Field Validation if the title text is less than 5 letter', () => {
    let fixture = TestBed.createComponent(AddComponent);
    fixture.detectChanges();
    let element = fixture.nativeElement;
    let form = fixture.debugElement.query(By.css('form')).nativeElement;
    let titleInput = fixture.debugElement.query(By.css('#title')).nativeElement;
    fixture.detectChanges();
    titleInput.value = 'hh';
    titleInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    let errors = element.querySelectorAll('#g-title p');
    let errorMessage: string = errors[0].innerText.trim();
    expect(errors.length).toBe(1);
    expect(errorMessage).toBe('it should be 5 character');

  });

  it('Input Field Validation if the title text is empty', () => {
    let fixture = TestBed.createComponent(AddComponent);
    fixture.detectChanges();
    let element = fixture.nativeElement;
    let form = fixture.debugElement.query(By.css('form')).nativeElement;
    let titleInput = fixture.debugElement.query(By.css('#title')).nativeElement;
    fixture.detectChanges();
    titleInput.value = '';
    titleInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    let errors = element.querySelectorAll('#g-title p');
    let errorMessage: string = errors[0].innerText.trim();
    expect(errors.length).toBe(1);
    expect(errorMessage).toBe('Field is required');

  });

  it('Input Field Validation if the url text is empty', () => {
    let fixture = TestBed.createComponent(AddComponent);
    fixture.detectChanges();
    let element = fixture.nativeElement;
    let form = fixture.debugElement.query(By.css('form')).nativeElement;
    let urlInput = fixture.debugElement.query(By.css('#url')).nativeElement;
    fixture.detectChanges();
    urlInput.value = '';
    urlInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    let errors = element.querySelectorAll('#g-url p');
    let errorMessage: string = errors[0].innerText.trim();
    expect(errors.length).toBe(1);
    expect(errorMessage).toBe('Field is required');

  });
  it('Submit button testing', () => {
    //mockAddService.addGame=jasmine.createSpy('addGame').and.returnValue(true);
    let fixture = TestBed.createComponent(AddComponent);
   
    //spyOn(mockAddService, "addGame");
    fixture.detectChanges();
    let element = fixture.nativeElement;
    let form = fixture.debugElement.query(By.css('form')).nativeElement;
    let urlInput = fixture.debugElement.query(By.css('#url')).nativeElement;
    urlInput.value = "sample title";
    let titleInput = fixture.debugElement.query(By.css('#title')).nativeElement;
    titleInput.value = "sample.jpg";
    let noteInput = fixture.debugElement.query(By.css('#note')).nativeElement;
    noteInput.value = "Sample note";
    let saveButton = fixture.debugElement.query(By.css('#save')).nativeElement;
    form.submit();
    //fixture.debugElement.componentInstance.addGame();
    //fixture.detectChanges();
    //expect(mockAddService.addGame).toHaveBeenCalled();
    //expect(mockAddService.addGame).toHaveBeenCalledWith({title:'sample title',url:'sample.jpg',note:'Sample note'});

  });

});
