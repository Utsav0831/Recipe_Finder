import { Component } from '@angular/core';
import { randomInt } from 'crypto';

@Component({
  selector: 'app-likes',
  standalone: true,
  imports: [],
  templateUrl: './likes.component.html',
  styleUrl: './likes.component.css'
})
export class LikesComponent {

  isLiked: boolean = false; // Track the like state
  

  toggleLike(): void {
    this.isLiked = !this.isLiked; // Toggle the like state
  }

}
