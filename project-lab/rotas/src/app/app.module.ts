import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CursosComponent} from './cursos/cursos.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RouterModule} from "@angular/router";
import {appRouter} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRouter),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
