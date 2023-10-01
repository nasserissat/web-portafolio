import { Component } from "@angular/core";
@Component({
    selector: 'main-page',
    template: `
    <div class="flex flex-col h-full w-full items-start justify-center px-6 md:px-28">    
        <div class="flex flex-col justify-between space-y-12">
            <p class="font-semibold text-5xl md:text-[82px] text-white">
                Hi, I'm Nasser
            </p>
            <typer class="flex font-semibold text-2xl md:text-[82px] text-white"></typer>
        </div>
        <button class="py-3.5 px-5 text-md bg-[#25160A] text-[#FBB771] font-bold hover:text-[#fdbd7e] border-[#25160A] hover:bg-[#4f392a] rounded-sm border mt-10 transition duration-300">Contact me</button>
    </div>
    `
})
export class MainPage {

}
