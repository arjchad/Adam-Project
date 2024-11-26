// app.component.ts
import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { SBarComponent } from './s-bar/s-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SBarComponent,
    RouterLink,
    RouterLinkActive,
    // Remove other component imports unless used directly in app.component.html
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
