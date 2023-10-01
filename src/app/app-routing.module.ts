import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container.component';
import { MainPage } from './pages/main.page';
import { ContatPage } from './pages/contact.page';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: "full"},
  {path: '', component: ContainerComponent, children: [
    {path: 'inicio', component: MainPage},
    {path: 'contact', component: ContatPage}
  ]},
  {path: '**', component: MainPage},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
