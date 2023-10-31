import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container.component';
import { MainPage } from './pages/main.page';
import { ContatPage } from './pages/contact.page';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: '', component: ContainerComponent, children: [
    {path: 'home', component: MainPage},
    {path: 'contact', component: ContatPage},
    // Añadir más rutas aquí
  ]},
  {path: '**', component: MainPage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
