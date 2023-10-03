import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { YellowBackgroundDirective } from './directives/yellow-background.directive';
import { GenericOneComponent } from './generic-one/generic-one.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifComponent,
    NgforComponent,
    NgContentComponent,
    YellowBackgroundDirective,
    GenericOneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
