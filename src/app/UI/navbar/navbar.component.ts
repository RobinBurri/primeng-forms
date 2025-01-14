import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { usePreset } from '@primeng/themes';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { theme1, theme2, theme3, theme4 } from '../../../../mypreset';
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

  themes = [
    { label: 'Theme 1', name: 'theme1' },
    { label: 'Theme 2', name: 'theme2' },
    { label: 'Theme 3', name: 'theme3' },
    { label: 'Theme 4', name: 'theme4' },
  ];

  formPicker = this.fb.group({
    formSelected: [{ label: '', link: '' }],
    themeSelected: [{ label: '', name:'' }],
  });



  SelectFormHandler() {
    this.router.navigate([this.formPicker.value.formSelected?.link]);
    this.formPicker.reset();
  }

  SelectThemeHandler() {
    const themeName = this.formPicker.value.themeSelected?.name;
    switch (themeName) {
      case 'theme1':
        usePreset(theme1);
        break;
      case 'theme2':
        usePreset(theme2);
        break;
      case 'theme3':
        usePreset(theme3);
        break;
      case 'theme4':
        usePreset(theme4);
        break;
      default:
        usePreset(theme1);
        break;
    }
  }
}
