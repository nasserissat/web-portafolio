import { Component } from "@angular/core";
@Component({
  selector: 'container',
  template: `
    <div class="flex flex-col relative">      
      <!-- Contenido -->
   
        <header class="flex w-full justify-between items-center z-10 top-0 px-4 py-1 lg:py-5 bg-white h-[10vh]">
            <img src="./../../assets/nissa.png" class="w-36 md:w-64 lg:w-96 lg:hidden"> 
            <div class="flex lg:hidden w-full justify-end">
              <i class="fa-solid fa-bars text-2xl cursor-pointer"></i>
            </div>
            <nav class="hidden lg:flex items-center">
              <img src="./../../assets/nissa.png" class="w-36 mr-3">
              <ul class="flex space-x-10">
                    <li *ngFor="let menu of menus" class="cursor-pointer">
                        <a  (click)="scrollTo(menu.link.substring(1))" routerLinkActive="active-link-class" class="hover:-translate-y-1 hover:text-primary duration-150 font-semibold">
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
              <button class="button primary py-4 px-6 cursor-pointer">
                Contact me
                <i class="fa-solid fa-play text-white pl-4"></i>
              </button>
            </div>
          </header>
          <main class="grid max-w-[100vw] h-screen flex-grow flex-1 overflow-y-auto overflow-x-hidden">
              <router-outlet></router-outlet>
          </main>
          <footer class="mt-12 mb-2">
            <div class="md:flex justify-center items-center space-x-4 text-center">
              <p class="text-[#5A5A5A]">Made with ❤️ by <a href="https://www.linkedin.com/in/eduardo-alejandro-ramirez-ramirez-7b1b3b1b4/" class="text-primary">Nasser Issa </a></p>
              <span>
                © Nissa - All rights reserved.
              </span>
            </div>
          </footer>
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
