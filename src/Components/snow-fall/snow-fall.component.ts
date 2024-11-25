import { CommonModule } from '@angular/common';
import { Component ,OnInit, Renderer2, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-snow-fall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snow-fall.component.html',
  styleUrl: './snow-fall.component.scss'
})
export class SnowFallComponent implements OnInit {
  snowflakes: { left: string; size: string; duration: string; delay: string }[] = [];

  ngOnInit(): void {
    this.generateSnowflakes();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.generateSnowflakes();
  }

  generateSnowflakes(): void {
    const totalSnowflakes = 50; // Adjust this number as needed
    this.snowflakes = Array.from({ length: totalSnowflakes }, () => ({
      left: `${Math.random() * 100}vw`, // Random horizontal position
      size: `${Math.random() * (20 - 10) + 40}px`, // Size between 10px and 20px
      duration: `${Math.random() * (15 - 5) + 5}s`, // Fall duration between 5s and 15s
      delay: `${Math.random() * 5}s`, // Random animation delay
    }));
  }

  getStyle(snowflake: { left: string; size: string; duration: string; delay: string }) {
    return {
      left: snowflake.left,
      fontSize: snowflake.size,
      animationDuration: snowflake.duration,
      animationDelay: snowflake.delay,
    };
  }
  
}
