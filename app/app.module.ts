import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent }  from './app.component';
import { AddComponent }  from './add.component';
import { ListComponent } from './list.component';
import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, WelcomeComponent, AddComponent, ListComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
