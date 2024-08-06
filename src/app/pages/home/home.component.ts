import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router'; // Import the Router module

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  
  slides = [
    'assets/Picture10.jpg', 'assets/Picture1.png', 'assets/Picture2.png', 'assets/Picture3.png', 
    'assets/Picture4.png', 'assets/Picture5.png', 'assets/Picture6.jpg', 'assets/Picture7.jpg', 
    'assets/Picture8.jpg', 'assets/Picture9.jpg'
  ];
  
  activeSlide = 0;
  autoplayInterval: any;
  itemsToShow = 3;
  currentIndex = 0;
  itemsPerPage = 3;
  solutions = [
    { title: 'Sellado Equipo estacionario', image: 'assets/SelladoEquipoEstacionario.png' },
    { title: 'Sellado Equipo rotatorio', image: 'assets/SelladoEquipoEstacionario.png' },
    { title: 'Sellado de Válvulas', image: 'assets/SelladoEquipoEstacionario.png' },
    { title: 'Sellado Cilindros Hidráulicos', image: 'assets/SelladoEquipoEstacionario.png' },
    { title: 'Protección de rodamiento', image: 'assets/SelladoEquipoEstacionario.png' },
    { title: 'Servicios de reparación', image: 'assets/SelladoEquipoEstacionario.png' },
    { title: 'Servicios instalación en detenciones de planta', image: 'assets/SelladoEquipoEstacionario.png' },
    { title: 'Servicios de monitoreo', image: 'assets/SelladoEquipoEstacionario.png' },
    { title: 'Diseño y fabricación local', image: 'assets/SelladoEquipoEstacionario.png' }
  ];
  currentSolutions = this.solutions.slice(0, this.itemsPerPage);
  @ViewChild('industriesCarousel', { static: true }) industriesCarousel!: ElementRef ;
  @ViewChild('solutionsCarousel', { static: true })
  solutionsCarousel!: ElementRef;


  activeSlideSolution = 0;

  prevSlideSolution() {
    this.activeSlideSolution = (this.activeSlideSolution > 0) ? this.activeSlideSolution - 1 : this.solutions.length - 1;
    this.updateSolutionsCarousel();
  }

  nextSlideSolution() {
    this.activeSlideSolution = (this.activeSlideSolution < this.solutions.length - 1) ? this.activeSlideSolution + 1 : 0;
    this.updateSolutionsCarousel();
  }

  updateSolutionsCarousel() {
    const carouselElement = this.solutionsCarousel.nativeElement;
    const itemWidth = carouselElement.querySelector('.carousel-item').clientWidth;
    const translateX = -this.activeSlideSolution * itemWidth;
    carouselElement.style.transform = `translateX(${translateX}px)`;
  }
  industries = [
    { title: 'Industria 1', description: 'Descripción de la industria 1', image: 'assets/Picture1.png' },
    { title: 'Industria 2', description: 'Descripción de la industria 2', image: 'assets/Picture1.png' },
    { title: 'Industria 3', description: 'Descripción de la industria 3', image: 'assets/Picture1.png' },
    { title: 'Industria 4', description: 'Descripción de la industria 4', image: 'assets/Picture1.png' },
    { title: 'Industria 5', description: 'Descripción de la industria 5', image: 'assets/Picture1.png' },
    { title: 'Industria 6', description: 'Descripción de la industria 6', image: 'assets/Picture1.png' },
    { title: 'Industria 7', description: 'Descripción de la industria 7', image: 'assets/Picture1.png' },
    { title: 'Industria 8', description: 'Descripción de la industria 8', image: 'assets/Picture1.png' },
    { title: 'Industria 9', description: 'Descripción de la industria 9', image: 'assets/Picture1.png' },
    { title: 'Industria 10', description: 'Descripción de la industria 10', image: 'assets/Picture1.png' }
  ];
  activeIndustrySlide = 0;
  industryAutoplayInterval: any;
  numVisibleSlides = 3;
  branches = [
    { title: 'Sucursal 1', address: 'Dirección 1', phone: 'Teléfono 1', email: 'Correo 1', image: 'assets/sucursal1.png' },
    { title: 'Sucursal 2', address: 'Dirección 2', phone: 'Teléfono 2', email: 'Correo 2', image: 'assets/sucursal2.png' },
    { title: 'Sucursal 3', address: 'Dirección 3', phone: 'Teléfono 3', email: 'Correo 3', image: 'assets/sucursal3.png' }
  ];

  constructor(private titleService: Title, private router: Router) {
    this.titleService.setTitle('Home - Chesterton Chile');
  }

  ngOnInit(): void {
    this.startAutoplay();
    this.startIndustryAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
    this.stopIndustryAutoplay();
  }

  startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  pauseAutoplay(): void {
    this.stopAutoplay();
  }

  nextSlide(): void {
    this.activeSlide = (this.activeSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.activeSlide = (this.activeSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.activeSlide = index;
  }
  

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCurrentSolutions();
    }
  }

  next(): void {
    if (this.currentIndex + this.itemsPerPage < this.solutions.length) {
      this.currentIndex++;
      this.updateCurrentSolutions();
    }
  }

  updateCurrentSolutions(): void {
    this.currentSolutions = this.solutions.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }

  goToSolution(index: number): void {
    this.currentIndex = index;
    this.updateCurrentSolutions();
  }

  startIndustryAutoplay(): void {
    this.industryAutoplayInterval = setInterval(() => {
      this.nextSlideIndustry();
    }, 3000);
  }

  stopIndustryAutoplay(): void {
    if (this.industryAutoplayInterval) {
      clearInterval(this.industryAutoplayInterval);
    }
  }

  prevSlideIndustry() {
    const totalSlides = this.industries.length;
    this.activeIndustrySlide = (this.activeIndustrySlide > 0) ? this.activeIndustrySlide - 1 : totalSlides - 1;
    this.updateIndustriesCarousel();
  }


  nextSlideIndustry() {
    const totalSlides = this.industries.length;
    this.activeIndustrySlide = (this.activeIndustrySlide < totalSlides - 1) ? this.activeIndustrySlide + 1 : 0;
    this.updateIndustriesCarousel();
  }

  updateIndustriesCarousel() {
    const carouselElement = this.industriesCarousel.nativeElement;
    const itemWidth = carouselElement.querySelector('.carousel-item').clientWidth;
    const offset = this.activeIndustrySlide * itemWidth;
    carouselElement.style.transform = `translateX(-${offset}px)`;
  }
}