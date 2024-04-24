import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container.component';
import { MainPage } from './pages/main.page';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: '', component: ContainerComponent, children: [
    {path: 'home', component: MainPage},
  ]},
  {path: '**', component: MainPage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
