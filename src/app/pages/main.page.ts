import { Component, ElementRef, Renderer2, AfterViewInit, ViewChild, ViewChildren, QueryList } from "@angular/core";
import { AnimatedNumberComponent } from "../components/animate-number.page";
@Component({
    selector: 'main-page',
    template: `
    <div id="home" class="grid lg:grid-cols-12 items-center lg:h-screen lg:p-24 lg:pt-4 px-5">
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
                <button class="text-secondary py-2 px-6 lg:py-2.5 lg:px-8 text-sm lg:text-lg bg-primary font-bold rounded-full hover:bg-primary_hover duration-150 shine-effect shadow-custom hover:scale-105">Hire me</button>
            </div>
        </div>
        <div class="grid col-span-12 items-start lg:items-center lg:col-span-5 h-full p-3 lg:p-0">
            <img class="rounded-lg object-contain lg:object-cover lg:w-full lg:h-5/6 mt-4 lg:mt-0" src="../../assets/IMG_9199.jpg" alt="Nasser's picture">            
        </div>
    </div>
    <!-- <div id="about" class="grid cols-span-12 bg-tertiary text-secondary h-screen lg:mx-[385px p-5">
        <h1 class="font-bold text-xl lg:text-4xl text-center">World-Class Education</h1>
        <div class="grid lg:grid-flow-col">
            <div class="grid justify-center items-center px-5">
                <h1 class="subtitle">ITLA</h1>
                <p class="text-sm lg:text-lg text-justify">
                    I am a graduate from ITLA, esteemed as one of the most prestigious institutions in the Caribbean and Central America. This institution boasts ABET accreditation, a global benchmark of excellence.
                </p>
                <img src="../../assets/itla.jpeg" class=" lg:w-[800px] lg:h-[450px] rounded-lg">
            </div>
            <div class="grid justify-center items-center px-5">
                
            <h1 class="subtitle ">UNIBE</h1>
                <p class="text-sm lg:text-lg text-justify">
                Often referred to as the 'Harvard of Latin America', one of the top universities in the Dominican Republic, renowned for its quality and international recognition.
                </p>
                <img src="../../assets/unibejpg.jpeg" class=" lg:w-[800px] lg:h-[450px] rounded-lg">
            </div>
        </div>
    </div>   -->


    <div id="about" class="grid bg-tertiary text-secondary h-screen">
        <div class="grid cols-span-12 items-center text-center p-5 lg:mx-[385px]">
            <h1 class="font-bold text-xl lg:text-4xl pb-4">Get to know a bit about me ;)</h1>
            <p class="text-sm lg:text-lg text-center">
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
        <div class="grid justify-center items-center p-5 pt-0">
            <img src="../../assets/background-main.jpeg" class=" lg:w-[800px] lg:h-[450px] rounded-lg">
        </div>
        <!-- <h1 class="font-bold text-xl lg:text-4xl text-center">World-Class Education</h1>
        <div class="grid lg:grid-flow-col">
            <div class="grid justify-center items-center px-5">
                <h1 class="subtitle">ITLA</h1>
                <p class="text-sm lg:text-lg text-justify">
                    I am a graduate from ITLA, esteemed as one of the most prestigious institutions in the Caribbean and Central America. This institution boasts ABET accreditation, a global benchmark of excellence.
                </p>
                <img src="../../assets/itla.jpeg" class=" lg:w-[800px] lg:h-[450px] rounded-lg">
            </div>
            <div class="grid justify-center items-center px-5">
                
            <h1 class="subtitle ">UNIBE</h1>
                <p class="text-sm lg:text-lg text-justify">
                Often referred to as the 'Harvard of Latin America', one of the top universities in the Dominican Republic, renowned for its quality and international recognition.
                </p>
                <img src="../../assets/unibejpg.jpeg" class=" lg:w-[800px] lg:h-[450px] rounded-lg">
            </div>
        </div> -->
    </div>

    <div id="portafolio" class="grid items-center justify-center h-screen">
        <h1 class="font-bold text-xl">My projects</h1>
        <div class="grid grid-cols-12">
            <div class="grid col-span-12 xl:col-span-6 bg-primary rounded-lg p-4 m-2 text-center">
                <h1>titulo</h1>
                <p>descripcion</p>
            </div>
            <div class="grid col-span-12 xl:col-span-6 bg-primary rounded-lg p-4 m-2 text-center">
                <h1>titulo</h1>
                <p>descripcion</p>
            </div>
        </div>
    </div>
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

}
