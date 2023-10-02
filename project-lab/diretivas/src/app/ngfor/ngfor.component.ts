import {Component} from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
  cursos = [{id:10, desc:'Java'},
    {id: 11,desc: 'JaScript'},
    {id:12,desc: 'C'},
    {id:13, desc:'C++'},
    {id:14, desc:'Python'}];
}
