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
  readonly animationDuration = 500;
  animation:
    | { state: 'collapsing' | 'expanding'; fromTab: number; toTab: number }
    | { state: 'none'; currentTab: number } = { state: 'none', currentTab: 0 };
  private lastTimeoutId: number | undefined;

  isCollapsing() {
    return this.animation.state === 'collapsing';
  }

  isExpanding() {
    return this.animation.state === 'expanding';
  }

  isAnimationActive() {
    return this.animation.state !== 'none';
  }

  getVisibleTab() {
    return this.animation.state === 'none'
      ? this.animation.currentTab
      : this.animation.state === 'collapsing'
        ? this.animation.fromTab
        : this.animation.toTab;
  }

  isTabHidden(tab: number) {
    return this.getVisibleTab() !== tab;
  }

  getActiveTab() {
    return this.animation.state === 'none'
      ? this.animation.currentTab
      : this.animation.toTab;
  }

  toggleTab(toTab: number) {
    if (
      this.animation.state === 'none' &&
      this.animation.currentTab === toTab
    ) {
      return;
    }
    if (this.animation.state !== 'none' && this.animation.toTab === toTab) {
      return;
    }

    clearTimeout(this.lastTimeoutId);
    this.lastTimeoutId = undefined;

    this.animation = {
      state: 'collapsing',
      fromTab: this.getVisibleTab(),
      toTab: toTab,
    };

    this.lastTimeoutId = setTimeout(() => {
      this.animation.state = 'expanding';

      this.lastTimeoutId = setTimeout(() => {
        this.animation = { state: 'none', currentTab: toTab };
      }, this.animationDuration);
    }, this.animationDuration);
  }
}
