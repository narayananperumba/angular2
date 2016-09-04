import {Component, OnInit} from '@angular/core';
import {Game} from './game';
import {AddService} from './add.service';

@Component({
	selector:'list-form',
	template:`<div class="row" id="main-container"><div id="left-menu" *ngIf="games.length">
	<ul>
	<li *ngFor="let data of games let i = index" (click)="showGame(i)">
		Game {{i}}
		
	</li>
	</ul>
	</div>
	<div id="right-container">
		<p class="g-title">{{ game.title }}</p>
		<div *ngIf="game.url">
		<img src="{{game.url}}" onError="this.src='../assets/images/notfound.jpg';" width=400 height=300>
		</div>

	</div>
	</div>
	`,
	styles:[`
		#left-menu{
			float:left;
			width:150px;
			min-height:100px;
		}
		#right-container{
			float:left;
			width:500px;
			margin-left:20px;
			border:1px solid #000;
			height:380px;
		}
		#main-container{
			margin-top:20px;
		}
		img{
			display: block;
    		margin: 0 auto;
		}
		.g-title{
			margin-left:40px;
		}
		ul {
	    	list-style-type: none;
	    	margin: 0;
	    	padding: 0;
	    	width: 120px;
	    	background-color: #f1f1f1;
	    	border: 1px solid #555;
		}

		li {
	    	text-align: center;
	    	border-bottom: 1px solid #555;
	    	padding: 7px 0 7px 0;
	    	cursor:pointer;
		}

		li:last-child {
	   		border-bottom: none;
		}
	`
	],
	providers:[AddService]
})

export class ListComponent implements OnInit
{
	games: Game[];
	game: Game = new Game();
	constructor(private addService: AddService){
		
	}	
	ngOnInit()
	{
		this.games = this.addService.getGames();
		//console.log("games", this.games);
	}
	showGame(i:any)
	{
		this.game = this.games[i];
		//console.log(this.game);
	}
}