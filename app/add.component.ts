import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Game} from './game'
import {AddService} from './add.service';

@Component({
	selector: 'add-form',
	template:`<div class="row" id="main-container">
	<div class="form-container col-lg-12 col-xs-12"><form [formGroup]="form" (ngSubmit)="addGame(form.value)">
	<p>Add Game</p>
	<p>Title:</p>
	<p><input type="text" formControlName="title" id="title" class="form-control"></p>
	<div id="g-title" *ngIf="(!form.controls.title.valid && form.controls.title.dirty)">
      	<p *ngIf="form.controls.title.errors.required" class="error">Field is required</p>
    	<p *ngIf="form.controls.title.errors.minlength" class="error">it should be 5 character</p>
     </div>
	<p>Url:</p>
	<p><input type="text" formControlName="url" id="url" class="form-control"></p>
	<div id="g-url" *ngIf="(!form.controls.url.valid && form.controls.url.dirty)">
      	<p *ngIf="form.controls.url.errors.required" class="error">Field is required</p>
     </div>
	<p>Note:</p>
	<p><textarea formControlName="note" id="note" class="form-control"></textarea></p>
	<p><input type="submit" class="btn btn-default right" [disabled]="!form.valid" value = "Save" id="save"></p>
	</form>
	<div></div>`,
	styles:[`
	.form-container{
		max-width: 500px;
    	margin: 0 auto;
    	padding:20px;
    	border:1px solid #000;
	}
	#main-container{
		margin-top:20px;
	}
	.error{
		color:red;
	}
	.right{
		float:right;
	}
	`
	],
	providers:[AddService]
})

export class AddComponent implements OnInit
{
	form:FormGroup;
	games: Game[];
	constructor(private formBuilder: FormBuilder, private addService:AddService){ }

	ngOnInit(){
		this.form = this.formBuilder.group({
			title : ['', Validators.compose([Validators.required, Validators.minLength(5)])],
			url : ['', Validators.required],
			note: ['']
		});
	}
	addGame(model:Game)
	{
		//console.log("model");
		this.addService.addGame(model);
		this.form.reset();
	}
}