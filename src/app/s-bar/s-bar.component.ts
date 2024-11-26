import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-s-bar',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './s-bar.component.html',
  styleUrl: './s-bar.component.css'
})
export class SBarComponent {
  searchQuery: string = '';
  suggestions: string[] = [];

  OnInputChange(): void {
    const allSuggestions = ['Angular','React','Vue','Svelite','TypeScript']
    this.suggestions = allSuggestions.filter((s) =>
      s.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  selectSuggestions(suggestion: string): void {
    this.searchQuery = suggestion;
    this.suggestions = [];
    console.log('Selected suggestion:', suggestion);
  }
}
