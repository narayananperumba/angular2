import {AddService} from './add.service';
import {Game} from './game';
import {addProviders, inject} from '@angular/core/testing';

describe('Add service Testing', ()=>{
	let addService: AddService;
	beforeEach(()=> {
		addService = new AddService();
	});
	it('Check games varible is an array',  () => {

		expect(addService.games.length).toBe(0);
	});
	it('Check Adding Games',  () => {
		localStorage.setItem('games','');
		let data = {title:'sample title',url:'sampless.jpg',note:'Sample note'};
		addService.addGame(data);
		expect(localStorage.getItem('games')).toBe('['+JSON.stringify(data)+']');
	});
	it('Check Getgames is working',  () => {
		localStorage.setItem('games','');
		let data = {title:'sample title',url:'sampless.jpg',note:'Sample note'};
		addService.addGame(data);
		expect(JSON.stringify(addService.getGames())).toBe('['+JSON.stringify(data)+']');
	});
})