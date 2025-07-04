import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroSection } from '../hero-section';
import { NewArrivalsComponent } from '../new-arrivals';
import { StatsSection } from '../stats-section';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeroSection, NewArrivalsComponent, StatsSection],
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

}
