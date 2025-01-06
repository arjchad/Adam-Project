import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-training-home',
  standalone: true,
  templateUrl: './training-home.component.html',
  styleUrls: ['./training-home.component.css'],
  imports: [
    CommonModule
  ],
})
export class TrainingHomeComponent {
  activeTab: string = 'videos'; // Default tab

  // Function to switch tabs
  showTab(tab: string) {
    this.activeTab = tab;
  }
}
