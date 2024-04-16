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
  readonly animationDuration = 2 * 500;
  openTab = 0;
  animationActive = false;

  toggleTab(index: number) {
    this.animationActive = true;
    this.openTab = index;
    setTimeout(() => (this.animationActive = false), this.animationDuration);
  }
}
