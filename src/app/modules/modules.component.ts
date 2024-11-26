import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modules',
  standalone: true, // Standalone component
  imports: [CommonModule], // Import CommonModule for Angular directives
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css'],
})
export class ModulesComponent {
  modules: string[] = Array.from({ length: 20 }, (_, i) => `Module ${i + 1}`);
}
