import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div class="container">
    			<div class="row" id="header">
  					<a [routerLink]="['/']">Home</a>
	  				<a [routerLink]="['/add']">Add</a>
	  				<a [routerLink] = "['/games']">Game</a>
				</div>
    		<div class="outer-outlet">
      		<router-outlet></router-outlet>
    		</div>
    		</div>`,
    styles: [`
    #header {
      height: 40px;
      border-bottom:1px solid #ccc;
      margin-top:10px;
    }
    #header a{
    text-decoration: none;
    width: 70px;
    background: #ccc;
    height: 59px;
    border-radius: 8px;
    padding: 5px;
    }
  `]
})
export class AppComponent { }
