import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { usePreset } from '@primeng/themes';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MyPreset2 } from '../../../../mypreset';
import { SelectModule } from 'primeng/select';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterModule,
    ButtonModule,
    AvatarModule,
    SelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
})
export class NavbarComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  toggleDarkMode() {
    console.log('Toggling dark mode');
    const element = document.querySelector('html');
    element?.classList.toggle('dark-mode');
  }

  forms = [
    { label: 'Form One', link: '/form-one' },
    { label: 'Form Two', link: '/form-two' },
  ];

  formPicker = this.fb.group({
    formSelected: [''],
  });

  toggleTheme() {
    usePreset(MyPreset2);
  }

  SelectHandler() {
    this.router.navigate([this.formPicker.value.formSelected?.link]);
    this.formPicker.reset();
  }
}
