import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './features/dashboard/components/header/header.component';
import { SideNavComponent } from './features/dashboard/components/side-nav/side-nav.component';
import { MainComponent } from './features/dashboard/components/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent,SideNavComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'learning-app';
}
