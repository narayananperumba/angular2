import { provideRouter, RouterConfig } from '@angular/router';
import { AddComponent } from './add.component';
import { ListComponent } from './list.component';
import { WelcomeComponent } from './welcome.component';

export const routes: RouterConfig = [
  { path: 'add', component: AddComponent },
  { path: 'games', component: ListComponent },
  {path: '', component: WelcomeComponent},
  ];