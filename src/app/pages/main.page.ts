import { Component } from "@angular/core";
@Component({
    selector: 'main-page',
    template: `
    <div class="grid lg:grid-cols-12 items-center h-screen">
        <div class="grid col-span-12 lg:col-span-7 space-y-5 lg:space-y-10">
            <h4 class="text-lg font-medium">Hey there, </h4>
            <p class="font-semibold text-5xl lg:text-[82px]">
                I'm <span class="text-[#705DF2]">Nasser</span> 
            </p>
            <typer class="flex font-semibold text-2xl lg:text-[82px]"></typer>
            <p class="font-semibold leading-7 lg:w-1/2 text-justify mt-5">Design Club is a digital agency specialized in ecommerce. We build scalable, high-end web shops with composable commerce architecture.</p>
            <div class="flex lg:flex-col items-center lg:items-start justify-between lg:justify-start lg:space-y-5">
                <p class="flex font-medium hover:text-[#705DF2] hover:translate-x-3 duration-300 cursor-pointer">About me <span><i class="fa-solid fa-play text-[#705DF2] pl-4"></i></span></p>
                <button class="py-2 px-6 lg:py-2.5 lg:px-8 text-sm lg:text-lg bg-[#705DF2] font-bold text-white rounded-full hover:bg-[#7e6ee6] duration-150 shine-effect shadow-custom hover:scale-105">Hire me</button>
            </div>
        </div>
        <div class="grid col-span-12 items-center lg:col-span-5 h-full mt-4 lg:mt-0">
            <img class="rounded-lg object-cover w-full h-5/6" src="../../assets/IMG_9199.jpg" alt="Nasser's picture">            
        </div>
       
    </div>
    <div class="grid col-span-12 bg-black h-screen">
        
    </div>
    `,
})
export class MainPage {

}
