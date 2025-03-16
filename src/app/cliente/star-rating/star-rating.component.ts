import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [ NgIf, NgFor ],
  template: `
    <div class="text-warning">
      <ng-container *ngFor="let star of stars; let i = index">
        <i *ngIf="i < fullStars" class="bi bi-star-fill"></i>
        <i *ngIf="i === fullStars && hasHalfStar" class="bi bi-star-half"></i>
        <i *ngIf="i >= fullStars + (hasHalfStar ? 1 : 0)" class="bi bi-star"></i>
      </ng-container>
    </div>
  `,
  styles: [`
    .bi {
      font-size: 1.2rem;
    }
  `]
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  fullStars: number = 0;
  hasHalfStar: boolean = false;
  stars = Array(5).fill(0);

  ngOnChanges() {
    this.fullStars = Math.floor(this.rating);
    this.hasHalfStar = this.rating % 1 >= 0.5;
  }
}
