import {Component, OnInit} from '@angular/core';
import {CursosService} from "./cursos/cursos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'primeiro-projeto';

  constructor(private cursosService: CursosService) {
  }

  ngOnInit(): void {
    console.log(this.cursosService.getCursos());
  }
}
