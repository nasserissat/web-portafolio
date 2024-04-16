import { Component, ElementRef, Renderer2, AfterViewInit, ViewChild, ViewChildren, QueryList } from "@angular/core";
import { AnimatedNumberComponent } from "../components/animate-number.page";
import { Slider } from "../models/models";
@Component({
    selector: 'main-page',
    template: `
    <section id="home" class="grid lg:grid-cols-12 items-center lg:h-screen lg:p-24 lg:pt-4 px-5">
        <div class="grid col-span-12 lg:col-span-7 space-y-5 lg:space-y-10">
            <h4 class="text-lg font-medium mt-2">👋 Hey there,</h4>
            <p class="font-semibold text-5xl lg:text-[82px]">
                I'm <span class="text-primary">Nasser</span> 
            </p>
            <typer class="flex font-semibold text-2xl lg:text-[62px]"></typer>
            <p class="font-semibold leading-7 lg:w-1/2 text-justify mt-5"> 
            I love to code things from scratch, and enjoy bringing ideas to life in the browser.
            </p>
            <div class="flex lg:flex-col items-center lg:items-start justify-between lg:justify-start lg:space-y-5">
                <p class="flex font-medium hover:text-primary hover:translate-x-3 duration-300 cursor-pointer">About me <span><i class="fa-solid fa-play text-primary pl-4"></i></span></p>
                <button class="button primary font-semibold">Hire me</button>
            </div>
        </div>
        <div class="grid col-span-12 items-start lg:items-center lg:col-span-5 h-full p-3 lg:p-0">
            <img class="rounded-lg object-contain lg:object-cover lg:w-full lg:h-5/6 mt-4 lg:mt-0" src="../../assets/IMG_9199.jpg" alt="Nasser's picture">            
        </div>
    </section>

    <section id="about" class="grid bg-tertiary text-secondary h-screen  overflow-x-hidden overflow-y-hidden  mt-10">
        <div class="grid cols-span-12 items-center text-center p-5 lg:mx-[385px]">
            <h1 class="title font-bold text-xl lg:text-4xl py-4">Get to know a bit about me ;)</h1>
            <p class="md:text-lg text-center">
            I have collaborated on significant projects for prominent clients in my role as a junior developer, providing software solutions that positively impact their operations.
            </p>              
        </div>
        <div class="grid grid-cols-3 items-center text-center p-5 py-0 lg:mx-[385px]">
            <div *ngFor="let number of numbersToAnimate">
                <app-animated-number 
                    [maxValue]="number.maxValue" 
                    [duration]="number.duration" 
                    [color]="number.color">
                </app-animated-number>
            </div>
        </div> 
        <div class="grid grid-cols-3 text-center p-5 pt-0 pb-0 lg:pb-5 lg:mx-[385px]">
            <h3>Years of experience</h3>
            <h3>Proyects completed</h3>
            <h3>Technologies mastered</h3>
        </div> 
        <app-carousel [slides]="customSlides"></app-carousel>
    </section>
    
    <section id="portafolio" class="grid items-center justify-center h-screen">
        <div class="bg-white flex w-full px-5 max-h-24 h-24">
            <div class="flex items-center space-x-6 whitespace-nowrap animate-scroll">
                <img  src="../../assets/angular-logo.png" class="w-1/3 max-h-12">
                <img  src="../../assets/tailwind-logo.png" class="w-1/3 max-h-12">
                <img  src="../../assets/csharp-logo.png" class="w-1/3 max-h-12">
                <img  src="../../assets/typescript.png" class="w-1/3 max-h-12">
                <img  src="../../assets/sqlserver-logo.webp" class="w-1/3 max-h-12">
                <img  src="../../assets/mysql-logo.png" class="w-1/3 max-h-12">
            </div>
        </div>
        <p class="text-sm lg:text-lg text-center">
         Want to see what's included? Check out the video down below:
        </p>
        <h1 class="font-bold text-xl">My projects</h1>
        <div class="grid grid-cols-12 grid-flow-col">
            <div class="grid col-span-12 xl:col-span-6 bg-primary text-secondary rounded-lg p-4 m-2 text-center">
                <h1>titulo</h1>
                <p>descripcion</p>
            </div>
            <div class="grid col-span-12 xl:col-span-6 bg-primary text-secondary rounded-lg p-4 m-2 text-center">
                <h1>titulo</h1>
                <p>descripcion</p>
            </div>
        </div>
    </section>
    <section id="contact" class="grid grid-cols-2 text-tertiary">
        <h1 class="col-span-2 sub-title text-center">Contact me</h1>
    <form class="flex flex-col justify-center items-center col-span-2">
            <div class="mt-5 w-11/12">
                <label for="name" class="font-semibold">Nombre</label>
                <input id="name" name="name" type="text" placeholder="Nombre" class="input">
            </div>
            <div class="mt-5 w-11/12">
                <label for="email" class="font-semibold">Email</label>
                <input id="email" name="email" type="email" placeholder="Correo electrónico" class="input">
            </div>
            <div class="mt-5 w-11/12">
                <label for="company" class="font-semibold">Compañía</label>
                <input id="company" name="company" type="text" placeholder="Compañía" class="input">
            </div>
            <div class="mt-5 w-11/12">
                <label for="tel" class="font-semibold">Teléfono</label>
                <input id="tel" name="tel" type="tel" placeholder="Teléfono" class="input">
            </div>
            <div class="mt-5 w-11/12">
                <label for="message" class="font-semibold">Mensaje</label>
                <textarea id="message" name="message" placeholder="Mensaje" class="input"></textarea>
            </div>
          <button class="button primary text-white p-2 rounded-md mt-4 col-span-2">Enviar mensaje</button>
        </form>
    </section>
    `,
})
export class MainPage {
    @ViewChildren(AnimatedNumberComponent) animatedNumbers!: QueryList<AnimatedNumberComponent>;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}
    ngAfterViewInit(): void {
        if (typeof window !== 'undefined') {
            this.renderer.listen('window', 'scroll', () => {            
                this.animatedNumbers.forEach(animNumber => {
                    const animatedNumberElement = animNumber.elRef.nativeElement;
                    const rect = animatedNumberElement.getBoundingClientRect();
                    
                    if (rect.top <= window.innerHeight && rect.bottom >= 0 && !animNumber.animationStarted) {
                        animNumber.animateNumber();
                    }
                
                    if (rect.top > window.innerHeight || rect.bottom < 0) {
                        animNumber.resetNumber();
                    }
                });
            });
        }        
    }
    numbersToAnimate = [
        { maxValue: 2, duration: 2000, color: "text-secondary" },
        { maxValue: 6, duration: 2000, color: "text-secondary" },
        { maxValue: 8, duration: 2000, color: "text-secondary" },
    ];
    customSlides: Slider[] = [
        {
          img: '../../assets/itla.jpeg',
          title: 'Graduated from ITLA',
          description: 'Esteemed as one of the most prestigious institutions in the Caribbean and Central America',
          link: 'https://example.com/more-about-innovation',
          icon: 'fa-solid fa-graduation-cap'
        },
        {
            img: '../../assets/itla.jpeg',
            title: 'Internation accreditation',
            description: 'ITLA boasts ABET accreditation, a global benchmark of excellence.',
            link: 'https://example.com/more-about-innovation',
            icon: 'fa-solid fa-award'
          },
        {
          img: '../../assets/unibejpg.jpeg',
          title: 'UNIBE university',
          description: 'Aprende sobre la integración de nuevas tecnologías en sistemas educativos modernos.',
          link: 'https://example.com/more-about-education',
          icon: 'fa-solid fa-microchip'
        }
      ];
}
