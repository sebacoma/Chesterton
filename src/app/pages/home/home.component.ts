import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router module

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  slides = [
    'assets/Picture10.jpg', 'assets/Picture1.png', 'assets/Picture2.png', 'assets/Picture3.png', 
    'assets/Picture4.png', 'assets/Picture5.png', 'assets/Picture6.jpg', 'assets/Picture7.jpg', 
    'assets/Picture8.jpg', 'assets/Picture9.jpg'
  ];
  activeSlide = 0;
  autoplayInterval: any;

  solutions = [
    {
      title: 'Solución 1',
      description: 'Descripción de la solución 1.',
      image: 'assets/Picture6.jpg'
    },
    {
      title: 'Solución 2',
      description: 'Descripción de la solución 2.',
      image: 'assets/Picture7.jpg'
    },
    {
      title: 'Solución 3',
      description: 'Descripción de la solución 3.',
      image: 'assets/Picture8.jpg'
    },
    {
      title: 'Solución 4',
      description: 'Descripción de la solución 4.',
      image: 'assets/Picture9.jpg'
    }
    // Agrega más soluciones según sea necesario
  ];

  industries = [
    {
      title: 'Mineria',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestiae quasi recusandae praesentium quidem magnam voluptas molestias error quod, necessitatibus laudantium labore veniam. Perferendis nobis quos iure debitis tempora recusandae.',
      image: 'assets/Mineria.jpg'
    },
    {
      title: 'Energia',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestiae quasi recusandae praesentium quidem magnam voluptas molestias error quod, necessitatibus laudantium labore veniam. Perferendis nobis quos iure debitis tempora recusandae.',
      image: 'assets/Picture2.png'
    },
    {
      title: 'Sanitaria',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestiae quasi recusandae praesentium quidem magnam voluptas molestias error quod, necessitatibus laudantium labore veniam. Perferendis nobis quos iure debitis tempora recusandae.',
      image: 'assets/Picture7.jpg'
    }
    // Agrega más industrias según sea necesario
  ];


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
    }, 3000); // Cambia la imagen cada 3 segundos
  }

  pauseAutoplay() {
    clearInterval(this.autoplayInterval);
  }
}
