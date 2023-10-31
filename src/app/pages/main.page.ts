import { Component, ElementRef, Renderer2, AfterViewInit, ViewChild, ViewChildren, QueryList } from "@angular/core";
import { AnimatedNumberComponent } from "../components/animate-number.page";
@Component({
    selector: 'main-page',
    template: `
    <div id="home" class="grid lg:grid-cols-12 items-center h-[90vh] lg:p-24 lg:pt-4 px-5">
        <div class="grid col-span-12 lg:col-span-7 space-y-5 lg:space-y-10">
            <h4 class="text-lg font-medium mt-2">👋 Hey there,</h4>
            <p class="font-semibold text-5xl lg:text-[82px]">
                I'm <span class="text-[#705DF2]">Nasser</span> 
            </p>
            <typer class="flex font-semibold text-2xl lg:text-[62px]"></typer>
            <p class="font-semibold leading-7 lg:w-1/2 text-justify mt-5">Design Club is a digital agency specialized in ecommerce. We build scalable, high-end web shops with composable commerce architecture.</p>
            <div class="flex lg:flex-col items-center lg:items-start justify-between lg:justify-start lg:space-y-5">
                <p class="flex font-medium hover:text-[#705DF2] hover:translate-x-3 duration-300 cursor-pointer">About me <span><i class="fa-solid fa-play text-[#705DF2] pl-4"></i></span></p>
                <button class="py-2 px-6 lg:py-2.5 lg:px-8 text-sm lg:text-lg bg-[#705DF2] font-bold text-white rounded-full hover:bg-[#7e6ee6] duration-150 shine-effect shadow-custom hover:scale-105">Hire me</button>
            </div>
        </div>
        <div class="grid col-span-12 items-start lg:items-center lg:col-span-5 h-full">
            <img class="rounded-lg object-contain lg:object-cover lg:w-full lg:h-5/6  mt-4 lg:mt-0" src="../../assets/IMG_9199.jpg" alt="Nasser's picture">            
        </div>
    </div>
    <div id="about" class="grid bg-[#160C21] h-[90vh] text-white">
        <div class="grid cols-span-12 items-center text-center p-5 lg:mx-[385px]">
            <h1 class="font-bold text-xl lg:text-4xl pb-4">Get good at Three.js with <br> only <span class="text-[#705DF2]">one course</span></h1>
            <p class="text-sm lg:text-lg pb-2 leading-4">Joining Three.js Journey will give you lifetime access to a complete and easy to access course with 54 lessons.</p>
            <p class="text-sm lg:text-lg pt-2 leading-4">Want to see what's included? Check out the video down below: </p>
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
            <h3>Months of experience</h3>
            <h3>Proyects completed</h3>
            <h3>Technologies mastered</h3>
        </div> 
        <div class="grid justify-center items-center p-5 pt-0">
            <img src="../../assets/background-main.jpeg" class=" lg:w-[800px] lg:h-[450px] rounded-lg">
        </div>
        <div class="grid text-center px-5 lg:mx-[385px]">
            <p class="leading-7 text-sm lg:text-lg pb-2">
            Each lesson begins with a starter folder to download.
            Then, simply follow the tutorial!
            </p>
        </div> 
    </div>
    <div id="portafolio" class="grid items-center justify-center h-[90vh] bg-white">
        <h1 class="font-bold text-xl">What will you learn?</h1>
        <p clas>
            The course is complete, yet accessible for beginners. We will start by discovering what WebGL is and why using the Three.js library is a must. We will then discover the various components of Three.js and once the basics are acquired, we will move on to more advanced techniques to display millions of particles, add physics, add interactions, create a galaxy, animate a raging sea, etc.
            At the end of the course, you will have a deep understanding of Three.js and enough experience to start your own projects.
            As a bonus, we will also learn how to use the 3D software Blender to be able to create our own models.
        </p>
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
        { maxValue: 19, duration: 2000, color: "text-white" },
        { maxValue: 6, duration: 2000, color: "text-white" },
        { maxValue: 8, duration: 2000, color: "text-white" },
    ];
}
