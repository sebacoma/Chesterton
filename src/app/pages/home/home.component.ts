import { Component, OnInit, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router'; // Import the Router module

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  ngOnInit(): void {
    this.checkScroll();
    this.startAutoplay();
    this.startIndustryAutoplay();
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
      const position = aboutSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight) {
        aboutSection.classList.add('visible');
      }
    }
  }


  slides = [
    'assets/Picture10.jpg', 'assets/Picture1.png', 'assets/Picture2.png', 'assets/Open-pit-mine.jpg',
    'assets/Picture5.png', 'assets/Picture6.jpg', 'assets/Picture02.png',
    'assets/Picture9.jpg', 'assets/Picture03.jpg'
  ];
  // slides = [
  //   {
  //     image: 'assets/Picture10.jpg',
  //     description: 'Descripción 1...'
  //   },
  //   {
  //     image: 'assets/Picture6.jpg',
  //     description: 'Descripción 2...'
  //   },
  //   {
  //     image: 'assets/Picture10.jpg',
  //     description: 'Descripción 3...'
  //   },
  //   {
  //     image: 'assets/Picture10.jpg',
  //     description: 'Descripción 4...'
  //   },
  //   {
  //     image: 'assets/Picture10.jpg',
  //     description: 'Descripción 5...'
  //   }
  // ];



  activeSlide = 0;
  autoplayInterval: any;
  itemsToShow = 3;
  currentIndex = 0;
  itemsPerPage = 3;
  solutions = [
    { id: 'sellado-equipo-estacionario', title: 'Sellado Equipo estacionario', image: 'assets/SelladoEquipoEstacionario.png', icon: 'assets/valvula-de-aceite.png' },
    { id: 'sellado-equipo-rotatorio', title: 'Sellado Equipo rotatorio', image: 'assets/SelladoEquipoEstacionario.png', icon: 'assets/ingenieria.png' },
    // { id: 'sellado-valvulas',title: 'Sellado de Válvulas', image: 'assets/SelladoEquipoEstacionario.png' },
    // { id: 'sellado-cilindros-hidraulicos',title: 'Sellado Cilindros Hidráulicos', image: 'assets/SelladoEquipoEstacionario.png', icon: 'assets/neumatico.png' },
    // { id: 'proteccion-rodamientos',title: 'Protección de rodamiento', image: 'assets/SelladoEquipoEstacionario.png', icon: 'assets/ingenieria.png'},
    { id: 'servicios-reparacion', title: 'Servicios de reparación', image: 'assets/SelladoEquipoEstacionario.png', icon: 'assets/recuperacion-de-desastres.png' },
    { id: 'servicios-instalacion-detenciones-planta', title: 'Servicios instalación en detenciones de planta', image: 'assets/SelladoEquipoEstacionario.png', icon: 'assets/fabrica.png' },
    { id: 'servicios-monitoreo', title: 'Servicios de monitoreo', image: 'assets/SelladoEquipoEstacionario.png', icon: 'assets/supervision.png' },
    { id: 'diseno-fabricacion-local', title: 'Diseño y fabricación local', image: 'assets/SelladoEquipoEstacionario.png', icon: 'assets/brazo-mecanico.png' }
  ];
  currentSolutions = this.solutions.slice(0, this.itemsPerPage);
  @ViewChild('industriesCarousel', { static: true }) industriesCarousel!: ElementRef;
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
    { title: 'Mineria', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'assets/dall-e mineria.webp' },
    { title: 'Pulpa y Papel', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'assets/dall-e pulpa.webp' },
    { title: 'Alimentos y Bebida', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'assets/dall-e alimento.webp' },
    { title: 'Termoelectrica', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'assets/dall-e termo.webp' },
    { title: 'Hidroelectrica', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'assets/dall-e hidro.webp' },
    { title: 'Tratamiento de agua', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'assets/dall-e agua.webp' },
    { title: 'Naval', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'assets/dall-e naval.webp' },
    { title: 'Química', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'assets/dall-e quimica.webp' },
    { title: 'Petroquímica', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'assets/dall-e petro.webp' },
    { title: 'Fabricacion de Equipo Original', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'assets/dall-e original.webp' }
  ];
  activeIndustrySlide = 0;
  industryAutoplayInterval: any;
  numVisibleSlides = 3;
  branches = [
    { title: 'Oficina Antofagasta', address: 'Avda. Edmundo Perez Zujovic, #5554, Antofagasta', phone: ' (55) 255 2090', email: ' chile3@chesterton.com', image: 'assets/antofa.webp' },
    { title: 'Oficina Santiago', address: 'Avenida Los Vientos #20090, Bodega B, Pudahuel, Santiago', phone: ' (2) 29 44 4631', email: 'chile2@chesterton.com', image: 'assets/santaigo.webp' },
    { title: 'Oficina Concepción', address: 'Camino a Coronel Km.10, #5580, Módulo 7-A Megacentro, San Pedro de la Paz, Concepción', phone: ' (41) 246 0300', email: ' chile1@chesterton.com', image: 'assets/conce.webp' }
  ];

  constructor(private titleService: Title, private router: Router) {
    this.titleService.setTitle('Home - Chesterton Chile');
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
  showFirstPart = true;
  displayedIndustries = this.industries.slice(0, 6); // Muestra las primeras 6 industrias

  toggleIndustries() {
    this.showFirstPart = !this.showFirstPart;

    if (this.showFirstPart) {
      this.displayedIndustries = this.industries.slice(0, 6); // Muestra las primeras 6 industrias
    } else {
      this.displayedIndustries = this.industries.slice(6); // Muestra las últimas 4 industrias
    }
  }
}