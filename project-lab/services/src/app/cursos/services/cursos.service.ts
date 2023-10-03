import {Injectable} from '@angular/core';
import {CursoModel} from "../models/curso-model";

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: CursoModel[] = [{uuid: '000', nome: 'Java'},
    {uuid: '001', nome: 'JavaScript'},
    {uuid: '002', nome: 'Angular'},
    {uuid: '003', nome: 'UI/UX Designer'},
    {uuid: '004', nome: 'TypeScript'}];

  constructor() {
  }


  getCursos(): any {
    return this.cursos;
  }

  addCurso(curso: CursoModel) {
    this.cursos.push(curso);
  }
}
