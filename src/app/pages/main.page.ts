import { Component, ElementRef, Renderer2, AfterViewInit, ViewChild, ViewChildren, QueryList } from "@angular/core";
import { AnimatedNumberComponent } from "../components/animate-number.page";
import { ContactData, Slider } from "../models/models";
import { CarouselComponent } from "../components/carousel.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import emailjs from '@emailjs/browser';
@Component({
    selector: 'main-page',
    template: `
    <section id="home" class="grid lg:grid-cols-12 items-center lg:h-screen px-5 pt-[9vh] max-w-[100vw]">
        <div class="grid col-span-12 lg:col-span-7 space-y-5 lg:space-y-10 xl:ml-2.5">
            <h4 class="text-lg font-medium mt-2">👋 Hey there,</h4>
            <p class="font-semibold text-5xl lg:text-[82px]">
                I'm <span class="text-primary">Nasser</span> 
            </p>
            <typer class="flex font-semibold text-2xl lg:text-[52px]"></typer>
            <p class="font-semibold leading-7 lg:w-1/2 text-justify mt-5"> 
            I love to code things from scratch, and enjoy bringing ideas to life in the browser.
            </p>
            <div class="flex lg:flex-col items-center lg:items-start justify-between lg:justify-start lg:space-y-5">
                <p (click)="scrollTo('about')" class="hidden xl:flex font-medium hover:text-primary items-center justify-center hover:translate-y-1 duration-300 cursor-pointer ml-3">About me <span><i class="fa-solid fa-play text-primary hover:text-primary hover:text-opacity-3 p-4 rotate-90"></i></span></p>
                <a href="assets/Curriculum.pdf"  download="Nasser Issa CV.pdf" class="xl:hidden hover:text-primary font-medium hover:scale-105 duration-300 cursor-pointer">
                Download CV
                <i class="fa-solid fa-download text-primary pl-1.5"></i>
                </a>
                <button (click)="scrollTo('contact')" class="flex button primary font-semibold">
                Hire me
            </button>
            </div>
        </div>
        <div class="grid col-span-12 items-center lg:items-center lg:col-span-5 h-full p-3 lg:p-0 xl:mr-2.5">
            <img class="rounded-lg object-contain lg:object-cover lg:w-full lg:h-5/6 mt-4 lg:mt-0" src="assets/nasserimg.jpg" alt="Nasser's picture">            
        </div>
    </section>

    <section #aboutSection id="about" class="grid bg-tertiary text-secondary h-screen overflow-x-hidden overflow-y-hidden pt-[9vh]">
        <div class="grid cols-span-12 items-center text-center p-5 lg:mx-[385px]">
            <h1 class="title font-bold text-xl lg:text-3xl py-4">Get to know a bit about me ;)</h1>
            <p class="xs:text-sm sm:text-base  text-center">
            I have collaborated on significant projects for prominent clients in my role as a Mid Developer, providing software solutions that positively impact their operations.
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
        <div class="grid grid-cols-3 text-center p-5 pt-0 pb-0 lg:pb-5 lg:mx-[385px] _text-xs xl:text-lg">
            <h3>Years of experience</h3>
            <h3>Contributed projects</h3>
            <h3>Technologies mastered</h3>
        </div> 
        <app-carousel
         #carouselComponent
        [slides]="customSlides"
        (mouseenter)="stopCarousel()"
        (mouseleave)="startCarousel()">
        <div class="flex-none w-full text-center" *ngFor="let slide of customSlides">
                <i class="{{slide.icon}} text-white text-7xl xl:text-8xl max-h-44 pt-8"></i>
                  <div class="text-xl md:text-2xl py-8">{{ slide.title }}</div>
                  <div class="md:text-lg px-3 mb-16 text-sm">{{ slide.description }}</div>
            </div>
        </app-carousel>
    </section>
    <section id="portafolio" class="wave-flex flex flex-col relative w-screen h-screen bg-primary pt-[9vh] sm:max-w-[100vw] xs:px-1 sm:px-0">
        <h1 class="sub-title text-secondary px-1 mt-4">Check out my latest project!</h1>
        <div class="flex-1 p-5 ">
            <div  *ngFor="let project of projects" class="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg md:w-[350px]">
            <img [src]="project.img" alt="{{ project.title }}" class="rounded-t-lg object-contain md:max-h-44">
            <div class="p-4">
                <h2 class="text-2xl font-bold mb-2">{{ project.title }}</h2>
                <p class="text-gray-700  xs:text-sm  md:text-base xl:text-sm">{{ project.description }}</p>
            </div>
            <b class="xs:text-sm sm:text-base">Check out the code source on Github!</b>
            <div class="flex w-full items-center p-4 justify-center space-x-3">
                <a href="https://github.com/nasserissat/AcademiK-Frontend" target="_blank" class="button-small bg-primary text-white hover:scale-105 duration-200 ease-in cursor-pointer hover:opacity-90 shine-effect">Frontend</a>
                <a href="https://github.com/nasserissat/AcademiK" target="_blank" class="button-small bg-tertiary text-white hover:scale-105 duration-200 ease-in cursor-pointer hover:bg-gray-700 shine-effect">Backend</a>
            </div>
            </div>
        </div>
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /></defs>
            <g class="parallax">
                <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
        </svg>
    </section>
    
    <section class="flex flex-col w-screen max-w-screen !overflow-x-hidden pt-[9vh] max-w-[100vw]">
        <p class="title text-center text-tertiary">
        Technologies I master
        </p>

        <div class="slider">
            <div class="slide-track">
                <div class="slide" *ngFor="let tech of technologies">
                    <img [src]="tech.imgSrc" class="img">
                 </div>
                <div class="slide" *ngFor="let tech of technologies">
                    <img [src]="tech.imgSrc" class="img">
                </div>
                <div class="slide" *ngFor="let tech of technologies">
                    <img [src]="tech.imgSrc" class="img">
                </div>
                <div class="slide" *ngFor="let tech of technologies">
                    <img [src]="tech.imgSrc" class="img">
                </div>
                <div class="slide" *ngFor="let tech of technologies">
                    <img [src]="tech.imgSrc" class="img">
                 </div>
                <div class="slide" *ngFor="let tech of technologies">
                    <img [src]="tech.imgSrc" class="img">
                </div>
                <div class="slide" *ngFor="let tech of technologies">
                    <img [src]="tech.imgSrc" class="img">
                </div>
                <div class="slide" *ngFor="let tech of technologies">
                    <img [src]="tech.imgSrc" class="img">
                </div>
            </div>
        </div>        
    </section>
    <section id="contact" class="flex flex-col h-screen pt-[9vh] text-tertiary items-center w-full max-w-[100vw]">
        <h1 class="col-span-2 lg:col-span-1 sub-title text-center">Let's get in touch ;) </h1>
    <form  (ngSubmit)="send()" [formGroup]="contact_form" class="grid grid-cols-2 place-items-center justify-center items-center w-full lg:w-1/2">
            <div class="col-span-2 mt-5 w-11/12">
                <label for="name" class="font-semibold">Name:</label>
                <input formControlName="name" id="name" name="name" type="text" placeholder="Name or company" class="input">
                <span *ngIf="contact_form.get('name')?.hasError('required') && contact_form.get('name')?.touched" class="text-red-500">This field is required</span>
            </div>
            <div class="col-span-2 mt-5 w-11/12">
                <label for="email" class="font-semibold">From: </label>
                <input formControlName="email" id="email" name="email" type="email" placeholder="From email" class="input">
                <span *ngIf="contact_form.get('email')?.invalid && contact_form.get('email')?.touched" class="text-red-500">Please enter a valid email address</span>
            </div>
            <div class="col-span-2 mt-5 w-11/12">
                <label for="subject" class="font-semibold">Subject: </label>
                <input formControlName="subject" id="subject" name="subject" type="text" placeholder="Subject" class="input">
                <span *ngIf="contact_form.get('subject')?.hasError('required') && contact_form.get('subject')?.touched" class="text-red-500">This field is required</span>
            </div>
            <div class="col-span-2 mt-5 w-11/12">
                <label for="message" class="font-semibold">Message: </label>
                <textarea formControlName="message" id="message" name="message" placeholder="Message" class="input h-48" aria-colspan="12"></textarea>
                <span *ngIf="contact_form.get('message')?.hasError('required') && contact_form.get('message')?.touched" class="text-red-500">This field is required</span>
            </div>
          <button [disabled]="sending" type="submit" class="button primary text-white p-2 rounded-md mt-4 col-span-2">{{sending ? 'sending...' : 'send'}}</button>
        </form>
    </section>
    `,
    styles: [`
 

    .slider{
        height: 250px;
        margin: auto;
        position: relative;
        width: 90%;
        display: grid;
        place-items: center;
        mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);

    }
    .slide-track{
        display: flex;
        width: calc(250px * 48);
        animation: scroll 160s linear infinite;
    }
    .slide-track:hover{
        animation-play-state: paused;
    }
    .slide{
        height: 200px;
        width: 100%;
        display: grid;
        align-items: center;
        padding: 20px;    
    }
    .slider::before,
    .slider::after {
        background: linear-gradient (to right, rgba（255, 255, 255, 1） 0%);
        content: ''; 
        height: 100%;
        position: absolute;
        width: 15%;
        z-index: 2;
    }
    .slider::after{
        right: 0;
        top: 0;
    }
    .slider::before{
        left: 0;
        top: 0;
    }
    @keyframes scroll {
        0%{
            transform: translateX(0);
        }
        100%{
            transform: translateX(calc(-250px * 48));
        }
    }
.wave-flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    text-align: center;
}
    .waves {
    position: absolute;
    width: 100%;
    height: 15vh;
    min-height: 280px;
    max-height: 400px;
    bottom: 0;
}

.parallax > use {
    -webkit-animation: moveForever 25s cubic-bezier(.55, .5, .45, .5) infinite;
            animation: moveForever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

.parallax > use:nth-child(1) {
    -webkit-animation-delay: -2s;
            animation-delay: -2s;
    -webkit-animation-duration: 5s;
            animation-duration: 5s;
}

.parallax > use:nth-child(2) {
    -webkit-animation-delay: -3s;
            animation-delay: -3s;
    -webkit-animation-duration: 6s;
            animation-duration: 6s;
}

.parallax > use:nth-child(3) {
    -webkit-animation-delay: -4s;
            animation-delay: -4s;
    -webkit-animation-duration: 8s;
            animation-duration: 8s;
}

.parallax > use:nth-child(4) {
    -webkit-animation-delay: -5s;
            animation-delay: -5s;
    -webkit-animation-duration: 10s;
            animation-duration: 10s;
}

@-webkit-keyframes moveForever {
    0% {
        -webkit-transform: translate3d(-90px, 0, 0);
                transform: translate3d(-90px, 0, 0);
    }
    100% {
        -webkit-transform: translate3d(85px, 0, 0);
                transform: translate3d(85px, 0, 0);
    }
}

@keyframes moveForever {
    0% {
        -webkit-transform: translate3d(-90px, 0, 0);
                transform: translate3d(-90px, 0, 0);
    }
    100% {
        -webkit-transform: translate3d(85px, 0, 0);
                transform: translate3d(85px, 0, 0);
    }
}

@media (max-width : 768px) {
    h1 {
        font-size: 24px;
    }
    .content {
        height: 30vh;
    }
    .waves {
        height: 140px;
        min-height: 140px;
    }
}

    `]
})
export class MainPage {
    sending: boolean = false;
    @ViewChildren(AnimatedNumberComponent) animatedNumbers!: QueryList<AnimatedNumberComponent>;
    @ViewChild('carouselComponent') carouselComponent: CarouselComponent | undefined;
    @ViewChild('aboutSection', { read: ElementRef }) aboutSection: ElementRef | undefined;
    private intervalId: any = null;
    contact_form: FormGroup
    constructor(
        private fb: FormBuilder,
        private renderer: Renderer2,
        private toastr: ToastrService){
        emailjs.init("4XOnqCL67qaT17slh");
        this.contact_form = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
            subject: ['', Validators.required],
            message: ['', Validators.required],
          })
    }

    async send(){
        console.log(this.contact_form.value)
           if(!this.contact_form.valid){
            this.toastr.error('Please complete all required fields', ' Submission Failed')
            return;
         }
        try {
            this.sending = true
            const response = await emailjs.send("service_5tr7umd","template_s6i8c1k",{
                from_name: this.contact_form.value.name,
                from_email: this.contact_form.value.email,
                subject: this.contact_form.value.subject,
                message: this.contact_form.value.message,
            });
            if(response.status === 200){
                this.toastr.success('Your email has been send successfully!', 'Message send!!')
                this.contact_form.reset();
                this.sending = false
            }else{
                this.toastr.error('Failed to send the message. Status: ' + response.status, 'Error');
                this.sending = false
            }
        } catch (error) {
            this.toastr.error('An error occurred while sending the email: ' + error, 'Error');
            this.sending = false

        }
    }
    
    ngAfterViewInit(): void {
        if (typeof window !== 'undefined') {
            this.renderer.listen('window', 'scroll', () => {    
                this.checkVisibilityAndSlide();

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
    checkVisibilityAndSlide(): void {
        if (!this.carouselComponent || !this.aboutSection) {
            return;
        }

        const rect = this.aboutSection.nativeElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            this.startCarousel()
        } else {
            this.stopCarousel();
        }
    }
    startCarousel() {
        if (!this.intervalId) { 
          this.intervalId = window.setInterval(() => {
            this.carouselComponent!.goToNextSlide();
        }, 3000);
        }
      }
    
      stopCarousel() {
        if (this.intervalId) {
          clearInterval(this.intervalId);
          this.intervalId = null;
        }
      }
      scrollTo(elementId: string): void {
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    numbersToAnimate = [
        { maxValue: 2, duration: 2000, color: "text-secondary" },
        { maxValue: 13, duration: 2000, color: "text-secondary" },
        { maxValue: 8, duration: 2000, color: "text-secondary" },
    ];
    customSlides: Slider[] = [
        {
          title: 'Proficient in 3 languages',
          description: 'Native Spanish, Advanced English (B2), Intermediate Portuguese.',
          icon: 'fa-solid fa-globe'
        },
        {
          title: 'Graduated from ITLA',
          description: 'Esteemed as one of the most prestigious institutions in the Caribbean and Central America',
          icon: 'fa-solid fa-graduation-cap'
        },
        {
            title: 'Internation accreditation',
            description: 'ITLA boasts ABET accreditation, a global benchmark of excellence.',
            icon: 'fa-solid fa-award'
          }
      ];
      projects: Slider[] = [
        {img: 'assets/attendance-ak.png',
        title: 'AcademiK App',
        description: 'Allow teachers to manage their students, publish grades, and record attendance.',
        icon: 'fa-solid fa-globe'}
      ];
      technologies = [
        { imgSrc: 'assets/angular-logo.png', name: 'Angular' },
        { imgSrc: 'assets/tailwind-logo.png', name: 'Tailwind CSS' },
        { imgSrc: 'assets/netcore-logo.png', name: '.NET Core' },
        { imgSrc: 'assets/typescript.png', name: 'TypeScript' },
        { imgSrc: 'assets/sqlserver-logo.webp', name: 'SQL Server' },
        { imgSrc: 'assets/mysql-logo.png', name: 'MySQL' }
      ];
}
