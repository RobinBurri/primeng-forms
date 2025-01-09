import { Component } from '@angular/core';
import { FormOneComponent } from './form-one/form-one.component';

@Component({
  selector: 'app-root',
  imports: [FormOneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
