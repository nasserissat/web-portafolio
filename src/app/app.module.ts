import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TyperComponent } from './components/typer.component';
import { MainPage } from './pages/main.page';
import { ContainerComponent } from './components/container.component';
import { AnimatedNumberComponent } from './components/animate-number.page';

@NgModule({
  declarations: [
    AppComponent,
    TyperComponent,
    ContainerComponent,
    AnimatedNumberComponent,


    // Pages
    MainPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
