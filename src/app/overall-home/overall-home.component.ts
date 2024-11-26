// overall-home.component.ts
import { Component } from '@angular/core';
import { CalendarTableComponent } from '../calendar-table/calendar-table.component';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-overall-home',
  standalone: true,
  imports: [CommonModule, CalendarTableComponent, RouterLink],
  templateUrl: './overall-home.component.html',
  styleUrls: ['./overall-home.component.css'],
})
export class OverallHomeComponent {
  constructor(private router: Router) {}

  get isModulesPage(): boolean {
    return this.router.url === '/modules';
  }
}
