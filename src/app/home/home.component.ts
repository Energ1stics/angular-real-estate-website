import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CityService as CityService } from '../services/city/city.service';
import { City } from '../models/city';
import { HousingTypeService } from '../services/housing-type/housing-type.service';
import HousingType from '../models/housing-type';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(
    private cityService: CityService,
    private housingTypeService: HousingTypeService,
  ) {}

  cities: City[] = [];
  housingTypes: HousingType[] = [];

  ngOnInit(): void {
    this.getCities();
    this.getHousingTypes();
  }

  getCities(): void {
    this.cityService.getCities().subscribe((cities) => (this.cities = cities));
  }

  getHousingTypes(): void {
    this.housingTypeService
      .getHousingTypes()
      .subscribe((housingTypes) => (this.housingTypes = housingTypes));
  }

  // -- CODE BELOW SHOULD BE SEPERATED INTO A NEW COMPONENT -- //

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
