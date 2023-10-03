import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CursosListarComponent} from './cursos-listar/cursos-listar.component';
import {CursosComponent} from './cursos.component';
import {CursosFormComponent} from "../src/app/cursos/cursos-form/cursos-form.component";


@NgModule({
  declarations: [
    CursosListarComponent,
    CursosComponent,
    CursosFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CursosComponent]
})
export class CursosModule {
}
