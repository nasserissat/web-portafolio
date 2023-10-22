import { Component } from "@angular/core";
@Component({
  selector: 'container',
  template: `
    <div class="flex flex-col min-h-screen relative">      
      <!-- Contenido -->
        <header class="flex justify-between items-center pt-8 px-14 pb-4 z-10">
        <div class="flex items-center">
          <img src="./../../assets/logo.png" class="w-48 mr-8">
          <nav>
              <ul class="hidden md:flex space-x-10">
                  <li *ngFor="let menu of menus" class="cursor-pointer">
                      <a [routerLink]="menu.link" routerLinkActive="active-link-class" class="hover:-translate-y-1 hover:text-[#705DF2] duration-150 font-semibold">
                          {{ menu.page }}
                      </a>
                  </li>
              </ul>
          </nav>
        </div>
          <div class="flex mx-4 items-center">
            <div class="flex items-center mx-4 group text-[#5A5A5A] hover:text-[#3f4f4f] font-semibold duration-150 cursor-pointer">
              <i class="fa-regular fa-user hover:text-black"></i>
              <p class="hover:text-[#4f4f4f] hover:underline pl-3">Login</p>
            </div>
            <button class="flex items-center bg-[#705DF2] text-white font-bold py-4 px-6 rounded-full hover:bg-[#7e6ee6] duration-150 shine-effect hover:translate-x-3">
              Contact me
              <i class="fa-solid fa-play text-white pl-4"></i>
            </button>
          </div>
        </header>
        
        <main class="flex flex-grow z-10">
            <router-outlet></router-outlet>
        </main>
        
        <footer class="flex justify-center items-center p-8 shadow-lg text-white z-10">
            <h1>Hola</h1>
        </footer>
    </div>
  `
})
export class ContainerComponent {
  menus = [
    { link: '', page: 'Home' },
    { link: '', page: 'About' },
    { link: '', page: 'Portafolio' },
  ];
}
