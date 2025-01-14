import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { SelectModule } from 'primeng/select';
import { City, Country } from '../models/dataModels';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DatePickerModule } from 'primeng/datepicker';
import { countries } from '../shared/data/countries';

@Component({
  selector: 'app-form-two',
  imports: [
    CardModule,
    CommonModule,
    InputGroupModule,
    InputGroupAddonModule,
    SelectModule,
    InputTextModule,
    FloatLabelModule,
    DatePickerModule,
  ],
  templateUrl: './form-two.component.html',
  styleUrl: './form-two.component.scss',
})
export class FormTwoComponent {
  countries: Country[] = countries;
}
