import { Injectable } from '@angular/core';
import {Game} from './game'

@Injectable()
export class AddService {
	games:Game[] = [];
	addGame(model:Game)
	{
		if(localStorage.getItem('games'))
			this.games = JSON.parse(localStorage.getItem('games'));
		this.games.push(model);
		localStorage.setItem('games',JSON.stringify(this.games));
		console.log(this.games);
	}
	getGames()
	{
		/*this.games = [{'title':'maneehsa',url:'https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/covered.jpg','note':'test'},{'title':'vipin',url:'test.png','note':'test'},
		{'title':'veena',url:'test.png','note':'https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/potter.jpg'},{'title':'aswathi',url:'https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/generation.jpg','note':'test'},{'title':'minu',url:'test.png','note':'test'},{'title':'deepthi',url:'https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/preschool.jpg','note':'test'},{'title':'maneehsa',url:'https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/soccer.jpg','note':'test'}];*/
		if(localStorage.getItem('games'))
			this.games = JSON.parse(localStorage.getItem('games'));
		return this.games; 

	}
}