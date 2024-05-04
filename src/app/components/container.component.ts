import { Component } from "@angular/core";
@Component({
  selector: 'container',
  template: `
    <div class="flex flex-col relative">      
      <!-- Contenido -->
   
        <header class="flex w-full justify-between items-center z-30 -top-1 px-4 py-1 lg:py-5 bg-white h-[9vh] fixed">
            <img  (click)="scrollTo('home')" src="assets/nissa.png" class="w-36 md:w-64 lg:w-96 lg:hidden"> 
            <div class="flex lg:hidden w-full justify-end">
              <i (click)="burgerMenuIsActive = true" class="fa-solid fa-bars text-2xl cursor-pointer"></i>
            </div>
            <nav class="hidden lg:flex items-center">
              <img (click)="scrollTo('home')" src="assets/nissa.png" class="w-36 mr-6 cursor-pointer">
              <ul class="flex space-x-10">
                    <li *ngFor="let menu of menus" class="cursor-pointer">
                        <a  (click)="scrollTo(menu.link.substring(1))" routerLinkActive="active-link-class" class="hover:-translate-y-1 hover:text-primary duration-150 font-semibold">
                            {{ menu.page }}
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="hidden lg:flex items-center">
              <button (click)="scrollTo('contact')" class="button primary py-4 px-6 cursor-pointer">
                Contact me
                <i class="fa-solid fa-handshake text-white pl-4"></i>
              </button>
            </div>
          </header>
          <!-- Menu de hamburguesa activo -->
          <ul *ngIf="burgerMenuIsActive" class=" h-screen fixed text-secondary items-center space-y-6 flex flex-col inset-0 bg-black opacity-95 z-40">
          <div class="w-full flex justify-end p-6">
            <i (click)="burgerMenuIsActive = false" class="fa-solid fa-times title cursor-pointer hover:text-primary hover:scale-150 hover:duration-300 duration-200 ease-out hover:ease-in-out"></i>
          </div>
            <li *ngFor="let menu of menus" class="cursor-pointer sub-title">
                <a  (click)="scrollTo(menu.link.substring(1))" routerLinkActive="active-link-class" class="hover:-translate-y-1 hover:text-primary duration-150 font-semibold">
                    {{ menu.page }}
                </a>
            </li>
          </ul>
          <main class="grid max-w-screen h-screen flex-grow flex-1 overflow-y-auto overflow-x-hidden">
              <router-outlet></router-outlet>
          </main>
          <footer class="mb-2">
            <div class="md:flex justify-center items-center space-x-4 text-center">
              <p class="text-[#5A5A5A]">Made by <a href="https://www.linkedin.com/in/nasser-emil-issa-tavares-9307b226a/" class="text-primary">Nasser Issa </a></p>
              <span>
                © Nissa - All rights reserved.
              </span>
            </div>
          </footer>
      </div>
  `
})
export class ContainerComponent {
  burgerMenuIsActive: boolean = false;
  menus = [
    { link: '#home', page: 'Home' },
    { link: '#about', page: 'About' },
    { link: '#portafolio', page: 'Portafolio' },
    { link: '#contact', page: 'Contact' },

 ];
scrollTo(elementId: string): void {
  this.burgerMenuIsActive = false;
  const element = document.getElementById(elementId);
  element?.scrollIntoView({ behavior: 'smooth' });
}

}
