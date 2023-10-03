import {Component} from '@angular/core';
import {CursosService} from "../../../../cursos/services/cursos.service";

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent {

  constructor(private cursoService: CursosService) {
  }

  addProduto(uuid: string, nome: string) {
    this.cursoService.addCurso({uuid: uuid, nome: nome})
  }
}
