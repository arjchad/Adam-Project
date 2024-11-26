import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-table.component.html',
  styleUrls: ['./calendar-table.component.css'],
})
export class CalendarTableComponent {
  events = Array.from({ length: 20 }, (_, i) => ({
    name: `Event ${i + 1}`,
    date: `2023-12-${String(i + 1).padStart(2, '0')}`,
  }));
}
