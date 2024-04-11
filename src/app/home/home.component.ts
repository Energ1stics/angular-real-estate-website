import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  openTab = 0;

  toggleTab(index: number) {
    console.log('Change from tab ', this.openTab, ' to tab ', index);
    this.openTab = index;
  }
}
