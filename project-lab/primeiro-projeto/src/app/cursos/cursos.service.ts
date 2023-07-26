import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {


  constructor() { }
  portalUrl: string = 'https://loiane-trainer.com';

  getCursos() {
    return ["Java Básico", "Java Avançado", "SpringBoot", "Javascript Básico", "Javascript Avançado", "Angular 13"];
  }
}
