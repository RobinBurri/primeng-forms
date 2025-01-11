import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
  selector: 'app-form-one',
  imports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    ReactiveFormsModule,
    CommonModule,
    IconFieldModule,
    InputIconModule,
    IftaLabelModule,
  ],
  templateUrl: './form-one.component.html',
  styleUrl: './form-one.component.scss',
  standalone: true,
})
export class FormOneComponent {
  private fb = inject(FormBuilder);

  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      postCode: ['', Validators.required],
    }),
  });

  addUser() {
    console.log(this.userForm.value);
  }
}
