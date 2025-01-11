import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { usePreset } from '@primeng/themes';
import { ButtonModule } from 'primeng/button';
import { MyPreset2 } from '../../../../mypreset';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
})
export class NavbarComponent {
  toggleDarkMode() {
    console.log('Toggling dark mode');
    const element = document.querySelector('html');
    element?.classList.toggle('dark-mode');
  }

  toggleTheme() {
    usePreset(MyPreset2);
  }
}
