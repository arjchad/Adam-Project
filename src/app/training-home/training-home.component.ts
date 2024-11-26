import { Component } from '@angular/core';

@Component({
  selector: 'app-training-home',
  templateUrl: './training-home.component.html',
  styleUrls: ['./training-home.component.css'],
})
export class TrainingHomeComponent {
  activeTab: string = 'videos'; // Default tab

  // Function to switch tabs
  showTab(tab: string) {
    this.activeTab = tab;
  }
}
