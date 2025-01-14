import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutoFocusModule } from 'primeng/autofocus';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FocusTrapModule } from 'primeng/focustrap';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { Country } from '../models/dataModels';
import { countries } from '../shared/data/countries';

@Component({
  selector: 'app-form-two',
  imports: [
    ReactiveFormsModule,
    CardModule,
    CommonModule,
    InputGroupModule,
    InputGroupAddonModule,
    SelectModule,
    InputTextModule,
    FloatLabelModule,
    DatePickerModule,
    SelectButtonModule,
    FocusTrapModule,
    AutoFocusModule,
    ButtonModule,
  ],
  templateUrl: './form-two.component.html',
  styleUrl: './form-two.component.scss',
})
export class FormTwoComponent {
  private fb = inject(FormBuilder);
  countries: Country[] = countries;
  genderOption: any = [
    { label: 'Male', value: 'm' },
    { label: 'Female', value: 'f' },
  ];

  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    country: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    gender: ['', Validators.required],
  });

  onSubmit() {
    console.log(this.userForm.value);
  }
}
