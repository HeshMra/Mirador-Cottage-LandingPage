import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../Components/nav-bar/nav-bar.component';
import { HeroSectionComponent } from '../Components/hero-section/hero-section.component';
import { AboutSectionComponent } from '../Components/about-section/about-section.component';
import { GallerySectionComponent } from '../Components/gallery-section/gallery-section.component';
import { ContactSectionComponent } from '../Components/contact-section/contact-section.component';
import { CommonModule } from '@angular/common'; 
import { SnowFallComponent } from '../Components/snow-fall/snow-fall.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent,HeroSectionComponent,AboutSectionComponent,GallerySectionComponent,ContactSectionComponent,CommonModule,SnowFallComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hotel-Landing-Page';    
}
