import { Component } from "@angular/core";
@Component({
  selector: 'container',
  template: `
    <div class="flex flex-col">      
      <!-- Contenido -->
      <div class="relative">
        <header class="flex w-full justify-between items-center z-10 top-0 px-4 py-1 lg:py-5 bg-white h-[10vh]">
            <img src="./../../assets/logo.png" class="w-48 md:w-64 lg:w-96 lg:hidden"> 
            <div class="flex lg:hidden w-full justify-end">
              <i class="fa-solid fa-bars text-2xl cursor-pointer"></i>
            </div>
            <nav class="hidden lg:flex items-center">
              <img src="./../../assets/logo.png" class="w-48 mr-3">
              <ul class="flex space-x-10">
                    <li *ngFor="let menu of menus" class="cursor-pointer">
                        <a  (click)="scrollTo(menu.link.substring(1))" routerLinkActive="active-link-class" class="hover:-translate-y-1 hover:text-[#705DF2] duration-150 font-semibold">
                            {{ menu.page }}
                        </a>
                    </li>
                </ul>
            </nav>        
            <div class="hidden lg:flex items-center">
              <div class="flex items-center group mx-4 text-[#5A5A5A] hover:text-[#3f4f4f] font-semibold duration-150 cursor-pointer">
                <i class="fa-regular fa-user hover:text-black"></i>
                <p class="hover:text-[#4f4f4f] hover:underline pl-3">Login</p>
              </div>
              <button class="flex items-center bg-[#705DF2] text-white font-bold py-4 px-6 rounded-full hover:bg-[#7e6ee6] duration-150 shine-effect hover:translate-x-3">
                Contact me
                <i class="fa-solid fa-play text-white pl-4"></i>
              </button>
            </div>
          </header>
          <main class="grid max-w-[100vw] h-[90vh] flex-grow flex-1 overflow-y-auto absolute">
              <router-outlet></router-outlet>
          </main>
      </div>
      
        
   
      </div>
  `
})
export class ContainerComponent {
  menus = [
    { link: '#home', page: 'Home' },
    { link: '#about', page: 'About' },
    { link: '#portafolio', page: 'Portafolio' },
 ];
 // En tu ContainerComponent
scrollTo(elementId: string): void {
  const element = document.getElementById(elementId);
  element?.scrollIntoView({ behavior: 'smooth' });
}

}
