import { Injectable } from '@angular/core';
import {CursosComponent} from "./cursos.component";
import {CursosModule} from "./cursos.module";

@Injectable({providedIn:CursosModule})
export class CursosService {


  constructor() { }
  portalUrl: string = 'https://loiane-trainer.com';

  getCursos() {
    return ["Java Básico", "Java Avançado", "SpringBoot", "Javascript Básico", "Javascript Avançado", "Angular 13"];
  }
}
