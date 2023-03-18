import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PanellComponent } from './panell/panell.component';
import { CalculaPressupostTotalService } from './calcula-pressupost-total.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [

  {path:'home', component:HomeComponent},
  {path:'welcome', component:WelcomeComponent}
  

  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanellComponent,
    WelcomeComponent,

   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
    

  ],
  providers: [CalculaPressupostTotalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
