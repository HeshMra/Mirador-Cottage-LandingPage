import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-snow-fall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snow-fall.component.html',
  styleUrl: './snow-fall.component.scss'
})
export class SnowFallComponent {

  snowflakes: any[] = [];

  ngOnInit(): void {
    this.createSnowflakes();
  }

  createSnowflakes(): void {
    for (let i = 0; i < 50; i++) {
      this.snowflakes.push({
        position: this.getRandomPosition(),
        size: this.getRandomSize(),
        duration: this.getRandomDuration(),
      });
    }
  }

  getRandomPosition(): string {
    return Math.random() * 100 + '%';
  }
  
  getRandomSize(): number {
    return Math.random() * (20 - 10) + 10; // Snowflakes size between 10 and 20px
  }
  
  getRandomDuration(): string {
    return (Math.random() * (10 - 20) + 20).toFixed(2) + 's'; // Snowflakes animation duration between 20s and 40s
  }
  
  
  
}
