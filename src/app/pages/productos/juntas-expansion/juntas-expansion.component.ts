import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-juntas-expansion',
  templateUrl: './juntas-expansion.component.html',
  styleUrls: ['./juntas-expansion.component.css']
})
export class JuntasExpansionComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const nextButton = document.querySelector<HTMLButtonElement>('.next');
    const prevButton = document.querySelector<HTMLButtonElement>('.prev');

    nextButton?.addEventListener('click', this.onNextClick.bind(this));
    prevButton?.addEventListener('click', this.onPrevClick.bind(this));
  }

  onNextClick(): void {
    const items = document.querySelectorAll<HTMLElement>('.item');
    const slide = document.querySelector<HTMLElement>('.slide');
    if (slide && items.length > 0) {
      slide.appendChild(items[0]);
    }
  }

  onPrevClick(): void {
    const items = document.querySelectorAll<HTMLElement>('.item');
    const slide = document.querySelector<HTMLElement>('.slide');
    if (slide && items.length > 0) {
      slide.prepend(items[items.length - 1]);
    }
  }
}
