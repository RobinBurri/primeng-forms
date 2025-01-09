import { Routes } from '@angular/router';
import { FormOneComponent } from './form-one/form-one.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'form-one',
    component: FormOneComponent,
  },
];
