import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  slides = ['assets/Picture10.jpg','assets/Picture1.png','assets/Picture2.png','assets/Picture3.png','assets/Picture4.png','assets/Picture5.png','assets/Picture6.jpg','assets/Picture7.jpg','assets/Picture8.jpg','assets/Picture9.jpg'];
  activeSlide = 0;
  autoplayInterval: any;

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.pauseAutoplay();
  }

  prevSlide() {
    this.activeSlide = (this.activeSlide > 0) ? this.activeSlide - 1 : this.slides.length - 1;
  }

  nextSlide() {
    this.activeSlide = (this.activeSlide < this.slides.length - 1) ? this.activeSlide + 1 : 0;
  }

  goToSlide(index: number) {
    this.activeSlide = index;
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  pauseAutoplay() {
    clearInterval(this.autoplayInterval);
  }
}