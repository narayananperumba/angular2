/* tslint:disable:no-unused-variable */
import { ListComponent } from './list.component';
import {AddService} from './add.service';

import { TestBed } from '@angular/core/testing';
import {Game} from './game'

import { By }             from '@angular/platform-browser';

////////  SPECS  /////////////


class MockAddService {
  games:Game[] = [];
  getGames()
  {
    this.games = [{'title':'maneehsa',url:'https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/covered.jpg','note':'test'},{'title':'vipin',url:'test.png','note':'test'},
    {'title':'veena',url:'test.png','note':'https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/potter.jpg'},{'title':'aswathi',url:'https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/generation.jpg','note':'test'},{'title':'minu',url:'test.png','note':'test'},{'title':'deepthi',url:'https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/preschool.jpg','note':'test'},{'title':'maneehsa',url:'https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/soccer.jpg','note':'test'}];
    return this.games; 

  }
}
/// Delete this
describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('ListComponent with TCB', function () {
  let mockAddService: MockAddService;
  beforeEach(() => {
    mockAddService = new MockAddService();
    TestBed.configureTestingModule({declarations: [ListComponent],providers:[{provide:AddService,useValue:MockAddService}]});
  });

  it('should instantiate component', () => {
    let fixture = TestBed.createComponent(ListComponent);
    expect(fixture.componentInstance instanceof ListComponent).toBe(true, 'should create AppComponent');
  });

  it('should have expected li element', () => {
    let fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();
    let element = fixture.nativeElement;
    fixture.componentInstance.games = [{'title':'maneehsa',url:'https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/covered.jpg','note':'test'},{'title':'vipin',url:'test.png','note':'test'},
    {'title':'veena',url:'test.png','note':'https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/potter.jpg'},{'title':'aswathi',url:'https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/generation.jpg','note':'test'},{'title':'minu',url:'test.png','note':'test'},{'title':'deepthi',url:'https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/preschool.jpg','note':'test'},{'title':'maneehsa',url:'https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/soccer.jpg','note':'test'}];
    fixture.detectChanges();
    expect(element.querySelectorAll('li').length).toBe(7);
  });

  it('should have expected image container', () => {
    let fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();
    let element = fixture.nativeElement;
    fixture.detectChanges();
    expect(element.querySelectorAll('#right-container').length).toBe(1);
  });

  it('should have expected title text when clicking left menu', () => {
    let fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();
    let element = fixture.nativeElement;
    fixture.componentInstance.games = [{'title':'maneehsa',url:'https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/covered.jpg','note':'test'}];fixture.detectChanges();
    let liElement = fixture.debugElement.query(By.css('li')).nativeElement;
    liElement.click();
    fixture.detectChanges();
    let titleText = fixture.debugElement.query(By.css('.g-title')).nativeElement.innerText;
    expect(titleText).toBe("maneehsa");
    //expect(element.querySelectorAll('img').length).toBe(1);
  });

});
