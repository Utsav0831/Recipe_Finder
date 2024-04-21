import { Component } from '@angular/core';
import { IconsComponent } from '../icons/icons.component';
import { LikesComponent } from '../likes/likes.component';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [IconsComponent, LikesComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent {

  handleNextClick(event: Event):void {
    event.preventDefault();
    const contentElement = document.querySelector('.content') as HTMLElement;
    if (contentElement) {
      contentElement.style.marginLeft = '-1300px';
    }

    const prevElement = document.querySelector('#prev') as HTMLElement;
    if (prevElement) {
      prevElement.style.display = 'block';
    }

    const nextElement = document.querySelector('#next') as HTMLElement;
    if (nextElement) {
      nextElement.style.display = 'none';
    }
  }

  handlePrevClick(event: Event): void {
    event.preventDefault();
    const contentElement = document.querySelector('.content') as HTMLElement;
    if (contentElement) {
      contentElement.style.marginLeft = '';
    }

    const prevElement = document.querySelector('#prev') as HTMLElement;
    if (prevElement) {
      prevElement.style.display = '';
    }

    const nextElement = document.querySelector('#next') as HTMLElement;
    if (nextElement) {
      nextElement.style.display = '';
    }
  }


}
