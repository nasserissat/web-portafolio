import { Component } from "@angular/core";
@Component({
  selector: 'container',
  template: `
    <div class="flex flex-col min-h-screen relative bg-black">
        <!-- Fondo de video con superposición -->
        <video autoplay muted loop class="absolute h-full w-full -translate-y-1/4 object-cover z-0 opacity-60 blur-sm">
          <source src="../../assets/pexels-mikhail-nilov-7534244 (1080p).mp4" type="video/mp4">
          Tu navegador no soporta la etiqueta de video
        </video>
        
        <!-- Contenido -->
        <header class="flex justify-between items-center pt-8 px-28 pb-4 z-10">
            <h2 class="font-bold text-white text-xl">Nasser Issa</h2>
            <nav>
                <ul class="hidden md:flex space-x-10">
                    <li *ngFor="let menu of menus">
                        <a [routerLink]="menu.link" routerLinkActive="active-link-class" class="text-white hover:text-gray-300">
                            {{ menu.page }}
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        
        <main class="flex flex-grow z-10">
            <router-outlet></router-outlet>
        </main>
        
        <footer class="flex justify-center items-center p-8 shadow-lg text-white z-10">
            <h1>Holla</h1>
        </footer>
    </div>
  `,
})
export class ContainerComponent {
  menus = [
    { link: '', page: 'Home' },
    { link: '', page: 'About' },
    { link: '', page: 'Services' },
    { link: '', page: 'Work' },
    { link: '', page: 'Contact' },
  ];
}
