import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../Components/nav-bar/nav-bar.component';
import { HeroSectionComponent } from '../Components/hero-section/hero-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent,HeroSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hotel-Landing-Page';
}
