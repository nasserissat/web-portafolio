import { Component } from "@angular/core";
@Component({
    selector: 'main-page',
    template: `
    <div class="flex flex-col h-full w-full items-start justify-center px-6 md:px-28 bg">
        <div class="flex items-center ">
            <div class="flex flex-col justify-between space-y-12">
                <h4 class="text-lg font-medium">Hey there, </h4>
                <p class="font-semibold text-5xl md:text-[82px]">
                    I'm <span class="text-[#705DF2]">Nasser</span> 
                </p>
                <typer class="flex font-semibold text-2xl md:text-[82px]"></typer>
                <p class="font-semibold w-1/2 leading-7 mt-10">Design Club is a digital agency specialized in ecommerce. We build scalable, high-end web shops with composable commerce architecture.</p>
                <p class="flex font-medium mt-5">About me <span><i class="fa-solid fa-play text-[#705DF2] pl-4"></i></span></p>
                <button class="py-4 px-6 text-md w-44 bg-[#705DF2] font-bold text-white rounded-full mt-10 hover:bg-[#7e6ee6] duration-150 shine-effect shadow-custom hover:scale-105">Hire me</button>
            </div>
            <img class="rounded-lg w-[450px] h-[350px] m-4" src="../../assets/IMG_9199.jpg" alt="">
        </div>
    </div>
    `,
   
})
export class MainPage {

}
