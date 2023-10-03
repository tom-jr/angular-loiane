import {Component, OnInit} from '@angular/core';
import {CursoModel} from "../models/curso-model";
import {CursosService} from "../services/cursos.service";


@Component({
  selector: 'app-cursos-listar',
  templateUrl: './cursos-listar.component.html',
  styleUrls: ['./cursos-listar.component.css']
})
export class CursosListarComponent implements OnInit {
  cursos?: CursoModel[] = [];

  constructor(private cursoService: CursosService) {
  }

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();
  }

}
