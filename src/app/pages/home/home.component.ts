// src/app/pages/home/home.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides: string[] = [
    'assets/Picture1.png',
    'assets/Picture2.png',
    'assets/Picture3.png',
    'assets/Picture4.png',
    'assets/Picture5.png',
    'assets/Picture6.png',
    'assets/Picture7.png',
  ];
  activeSlide = 0;

  constructor() { }

  ngOnInit(): void {
    this.startCarousel();
  }

  prevSlide() {
    this.activeSlide = (this.activeSlide - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    this.activeSlide = (this.activeSlide + 1) % this.slides.length;
  }

  startCarousel() {
    setInterval(() => {
      this.nextSlide();
    }, 3000); // Cambia la imagen cada 3 segundos
  }
}
