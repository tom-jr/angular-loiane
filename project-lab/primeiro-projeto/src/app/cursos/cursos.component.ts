import {Component} from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  portalUrl: string = 'https://loiane-trainer.com';
  cursos: string[] = ["Java Básico", "Java Avançado", "SpringBoot", "Javascript Básico", "Javascript Avançado", "Angular 13"];

}
